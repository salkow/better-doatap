from rest_framework import generics
from country.models import Country
from .serializers import CountrySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions, AllowAny
from university.serializers import UniversitySerializer
from department.serializers import DepartmentSerializer
from university.models import University


class CountryList(generics.ListAPIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    queryset = Country.objects.all()
    serializer_class = CountrySerializer

    def get_queryset(self):
        countries = Country.objects.all()
        return countries.order_by('name')


class UniversityList(generics.ListAPIView):

    permission_classes = [AllowAny]
    authentication_classes = ()

    def get_object(self, pk):
        try:
            return Country.objects.get(pk=pk)
        except Country.DoesNotExist:
            raise

    def get(self, request, pk, format=None):
        try:
            country = self.get_object(pk)
            universities = country.universities.all().order_by('name')
            serializer = UniversitySerializer(universities, many=True)
            return Response(serializer.data)
        except Country.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class DepartmentList(generics.ListAPIView):

    permission_classes = [AllowAny]
    authentication_classes = ()

    def get_country_object(self, pk):
        try:
            return Country.objects.get(pk=pk)
        except Country.DoesNotExist:
            raise

    def get_uni_object(self, pk):
        try:
            return University.objects.get(pk=pk)
        except University.DoesNotExist:
            raise

    def get(self, request, country_pk, uni_pk, format=None):
        try:
            country = self.get_country_object(country_pk)
            university = self.get_uni_object(uni_pk)
            departments = university.departments.all().order_by('name')
            serializer = DepartmentSerializer(departments, many=True)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)

from rest_framework import generics
from .models import Application
from users.models import NewUser
from .serializers import ApplicationDetailSerializer
from .serializers import ApplicationListSerializer
from .serializers import ApplicationListSerializer1
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, \
    BasePermission, IsAdminUser, DjangoModelPermissions, AllowAny, IsAuthenticated


class ApplicationList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Application.objects.all()
    serializer_class = ApplicationListSerializer

    def get_queryset(self):
        user = self.request.user
        return user.applications.all()


    def post(self, request, format=None):
        serializer = ApplicationListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationList_1(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Application.objects.all()
    serializer_class = ApplicationListSerializer1

    def get_queryset(self):
        user = self.request.user
        return user.applications.all()


    def post(self, request, format=None):
        serializer = ApplicationListSerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Application.objects.all()
    serializer_class = ApplicationDetailSerializer


class ApplicationListAdmin(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = Application.objects.all()
    serializer_class = ApplicationListSerializer

    def get_queryset(self):
        return Application.objects.filter(is_submitted=True, progress='P')


class ApplicationDetailAdmin(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = Application.objects.all()
    serializer_class = ApplicationDetailSerializer

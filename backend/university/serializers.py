from rest_framework import serializers
from university.models import University
from django.conf import settings

class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ('name', )

from rest_framework import serializers
from .models import Department
from django.conf import settings

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('name', )

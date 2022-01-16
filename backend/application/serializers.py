from rest_framework import serializers
from .models import Application
from django.conf import settings


class ApplicationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('id', 'name', 'is_submitted', 'progress', 'origin_country', 'origin_university',
                  'origin_department', 'destination_university', 'destination_department',
                  'type_of_diploma', 'reasons_for_declination', 'extra_subject')


class ApplicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('id', 'name', 'is_submitted', 'progress', 'origin_country', 'origin_university',
                  'origin_department', 'destination_university', 'destination_department',
                  'type_of_diploma', 'reasons_for_declination', 'extra_subject')

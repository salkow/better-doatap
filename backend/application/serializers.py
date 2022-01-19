from rest_framework import serializers
from .models import Application
from django.conf import settings


class ApplicationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('diploma', 'id', 'name', 'is_submitted', 'progress', 'origin_country', 'origin_university',
                  'origin_department', 'destination_university', 'destination_department',
                  'type_of_diploma', 'reasons_for_declination', 'extra_subject',
                  'extra_origin_university', 'extra_origin_department')


class ApplicationListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('user', 'diploma', 'id', 'name', 'is_submitted', 'progress', 'origin_country',
                  'origin_university', 'origin_department', 'destination_university',
                  'destination_department', 'type_of_diploma', 'reasons_for_declination',
                  'extra_subject')

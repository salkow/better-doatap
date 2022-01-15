from rest_framework import serializers
from country.models import Country
from django.conf import settings

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('name',)

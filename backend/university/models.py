from django.db import models
from django.conf import settings
from country.models import Country


class University(models.Model):

    name = models.CharField(max_length=100, primary_key=True)

    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='universities')

    def __str__(self):
        return self.name

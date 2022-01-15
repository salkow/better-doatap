from django.db import models
from django.conf import settings
from university.models import University


class Department(models.Model):

    name = models.CharField(max_length=100)

    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='departments')

    def __str__(self):
        return self.name

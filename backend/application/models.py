from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from users.models import NewUser
from country.models import Country
from university.models import University
from department.models import Department
from rest_framework import serializers


def user_directory_path(instance, filename):
    print(instance)
    return 'media/user_{0}/{1}'.format(instance.user.id, filename)


class Application(models.Model):

    PROGRESS_OPTIONS = (
        ('N', 'None'),
        ('A', 'Approved'),
        ('D', 'Declined'),
        ('P', 'InProgress'),
    )

    DIPLOMA_OPTIONS = (
        ('B', 'Basic'),
        ('P', 'PostGraduate'),
        ('D', 'Doctoral'),
    )

    user = models.ForeignKey(NewUser, on_delete=models.CASCADE, related_name='applications')

    name = models.CharField(max_length=150, blank=True)

    is_submitted = models.BooleanField(default=False)
    progress = models.CharField(max_length=1, choices=PROGRESS_OPTIONS, default='N')

    origin_country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='origin_applications')
    origin_university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='origin_universities')
    origin_department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='origin_departments')

    destination_university = models.ForeignKey(University, on_delete=models.CASCADE, null=True, blank=True, related_name='destination_universities')
    destination_department = models.ForeignKey(Department, on_delete=models.CASCADE, null=True, blank=True, related_name='destination_departments')

    type_of_diploma = models.CharField(max_length=1, choices=DIPLOMA_OPTIONS, default='B')

    diploma = models.FileField(default="", upload_to=user_directory_path)

    reasons_for_declination = models.TextField(null=True, blank=True)
    extra_subject = models.TextField(null=True, blank=True)

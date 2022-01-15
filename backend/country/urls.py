from django.urls import path
from .views import CountryList
from .views import UniversityList
from .views import DepartmentList

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'country'

urlpatterns = [
    path('', CountryList.as_view(), name='country_list'),
    path('<str:pk>/', UniversityList.as_view(), name='university_list'),
    path('<str:country_pk>/<str:uni_pk>', DepartmentList.as_view(), name='department_list'),
]

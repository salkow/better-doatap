from django.urls import path
from .views import ApplicationList
from .views import ApplicationDetail

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'application'

urlpatterns = [
    path('', ApplicationList.as_view(), name='application_list'),
    path('<int:pk>/', ApplicationDetail.as_view(), name='application_detail'),
]

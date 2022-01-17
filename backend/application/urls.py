from django.urls import path
from .views import ApplicationList
from .views import ApplicationDetail
from .views import ApplicationListAdmin
from .views import ApplicationDetailAdmin

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'application'

urlpatterns = [
    path('', ApplicationList.as_view(), name='application_list'),
    path('admin/', ApplicationListAdmin.as_view(), name='application_list_admin'),
    path('admin/<int:pk>/', ApplicationDetailAdmin.as_view(), name='application_list_admin'),
    path('<int:pk>/', ApplicationDetail.as_view(), name='application_detail'),
]

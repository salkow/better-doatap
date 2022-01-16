from django.urls import path
from .views import CustomUserCreate, CustomUserDisplay, BlacklistTokenUpdateView, UpdatePassword, AdminDisplay

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('profile/', CustomUserDisplay.as_view(), name="display_user"),
    path('update_password/', UpdatePassword.as_view(), name="update_password"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('is_superuser/', AdminDisplay.as_view(), name="is_superuser"),
]

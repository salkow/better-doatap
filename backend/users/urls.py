from django.urls import path
from .views import CustomUserCreate, CustomUserDisplay, BlacklistTokenUpdateView, UpdatePassword,\
    AdminDisplay, CustomAdminDisplay

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('profile/', CustomUserDisplay.as_view(), name="display_user"),
    path('all_profiles/<int:pk>/', CustomAdminDisplay.as_view(), name="display_all_users"),
    path('update_password/', UpdatePassword.as_view(), name="update_password"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('is_superuser/', AdminDisplay.as_view(), name="is_superuser"),
]

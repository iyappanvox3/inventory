from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import get_user_profile # Relative import works cleanly here

urlpatterns = [
    # These routes are automatically prefixed with 'api/auth/'
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),       # Maps to /api/auth/login/
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),     # Maps to /api/auth/token/refresh/
    path('me/', get_user_profile, name='user_profile'),                             # Maps to /api/auth/me/
]

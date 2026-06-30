from django.contrib import admin
from django.urls import path, include # Import include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Forward all /api/auth/ requests to the authentication app
    path('api/auth/', include('authentication.urls')), 
]

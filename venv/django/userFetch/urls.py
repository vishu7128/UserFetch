from django.urls import path
from .views import UserList

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

app_name = 'blog_api'

urlpatterns = [
    path('', UserList.as_view(), name='listcreate'),
]

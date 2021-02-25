from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ProductViewSet

app_name = "products"

# app_name will help us do a reverse look-up latter.
router = DefaultRouter()
router.register(r'articles', ProductViewSet)
urlpatterns = router.urls
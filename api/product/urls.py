from django.urls import path
from .views import ProductView

app_name = "products"

# app_name will help us do a reverse look-up latter.
urlpatterns = [
    #path('products/', ProductView.as_view()),
		#path('products/<int:pk>', SingleProductView.as_view())
		path('articles/', ProductView.as_view({'get': 'list'})),
    path('articles/<int:pk>', ProductView.as_view({'get': 'retrieve'})),
]
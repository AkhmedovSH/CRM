from django.db import models
from api.category.models import Category

# Create your models here.
class Product(models.Model):
		name = models.CharField(max_length=255)
		#category = models.ForeignKey('Category', related_name='articles', on_delete=models.CASCADE)
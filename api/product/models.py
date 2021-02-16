from django.db import models
from api.category.models import Category

# Create your models here.
class Product(models.Model):
	class Meta:
		db_table = 'product'

	name = models.CharField(max_length=255)
	category = models.ForeignKey(Category, related_name='articles', on_delete=models.CASCADE)

	def __str__(self):
		return self.name
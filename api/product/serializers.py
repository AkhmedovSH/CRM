from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.Serializer):
	name = serializers.CharField(max_length=120)
	category_id = serializers.IntegerField()

	def create(self, validated_data):
		return Product.objects.create(**validated_data)

	def update(self, instance, validated_data):
		instance.name = validated_data.get('name', instance.name)
		instance.category_id = validated_data.get('category_id', instance.category_id)
		instance.save()
		return instance
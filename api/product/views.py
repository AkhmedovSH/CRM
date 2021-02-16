from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Product
from .serializers import ProductSerializer


class ProductView(APIView):
		def get(self, request):
			products = Product.objects.all()
			serializer = ProductSerializer(products, many=True)
			return Response(serializer.data)

		def post(self, request):
			product = request.data.get('product')
			# Create an article from the above data
			serializer = ProductSerializer(data=product)
			if serializer.is_valid(raise_exception=True):
				product_saved = serializer.save()
			return Response({"success": "Product '{}' created successfully".format(product_saved.name)})

		def put(self, request, pk):
			product_saved = get_object_or_404(Product.objects.all(), pk=pk)
			data = request.data.get('product')
			print(data)
			serializer = ProductSerializer(instance=product_saved, data=data, partial=True)
			if serializer.is_valid(raise_exception=True):
				product_saved = serializer.save()
			return Response({
				"success": "Product '{}' updated successfully".format(product_saved.name)
			})

		def delete(self, request, pk):
			# Get object with this pk
			product = get_object_or_404(Product.objects.all(), pk=pk)
			product.delete()
			return Response({
					"message": "Article with id `{}` has been deleted.".format(pk)
			}, status=204)
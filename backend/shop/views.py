# backend/shop/views.py
from rest_framework.generics import RetrieveAPIView,  ListAPIView
from .models import Product
from .serializers import ProductSerializer


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from .models import Service
from .serializers import ServiceSerializer

class ServiceListPagination(PageNumberPagination):
    page_size = 10
    
class ServiceListView(ListAPIView):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    pagination_class = ServiceListPagination
    
class ServiceDetailView(RetrieveAPIView):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
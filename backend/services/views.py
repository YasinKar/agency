from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Service, Project
from .serializers import ServiceSerializer, ProjectSerializer
from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit

class ServiceListView(ListAPIView):
    queryset = Service.objects.filter(is_active=True).prefetch_related('service_features', 'service_images')
    serializer_class = ServiceSerializer
    
    @method_decorator(ratelimit(key='ip', rate='15/m', method='GET', block=True))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
    
class ServiceDetailView(RetrieveAPIView):
    queryset = Service.objects.filter(is_active=True).prefetch_related('service_features', 'service_images')
    serializer_class = ServiceSerializer
    lookup_field = 'slug'
    
    @method_decorator(ratelimit(key='ip', rate='15/m', method='GET', block=True))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
    
class ProjectListView(ListAPIView):
    queryset = Project.objects.filter(is_active=True)
    serializer_class = ProjectSerializer
    
    @method_decorator(ratelimit(key='ip', rate='15/m', method='GET', block=True))
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
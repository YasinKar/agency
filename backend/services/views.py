from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .models import Service, ServiceComment
from .serializers import ServiceSerializer, ServiceCommentSerializer
from django.db.models import Prefetch

class ServiceListPagination(PageNumberPagination):
    page_size = 20
    
class ServiceListView(ListAPIView):
    queryset = Service.objects.filter(is_active=True).prefetch_related(
        'service_images',
        Prefetch(
            'comments',
            queryset=ServiceComment.objects.select_related('user')
        )
    )
    serializer_class = ServiceSerializer
    pagination_class = ServiceListPagination
    
class ServiceDetailView(RetrieveAPIView):
    queryset = Service.objects.filter(is_active=True).prefetch_related(
        'service_images',
        Prefetch(
            'comments',
            queryset=ServiceComment.objects.select_related('user')
        )
    )
    serializer_class = ServiceSerializer
 
class ServiceCommentCreateView(CreateAPIView):
    queryset = ServiceComment.objects.all()
    serializer_class = ServiceCommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        service_id = self.kwargs['service_id']
        service = Service.objects.get(id=service_id)
        serializer.save(user=self.request.user, service=service)
        
class ServiceCommentUpdateView(UpdateAPIView):
    queryset = ServiceComment.objects.all()
    serializer_class = ServiceCommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
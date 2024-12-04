from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Service, ServiceComment
from .serializers import ServiceSerializer, ServiceCommentSerializer

class ServiceListView(ListAPIView):
    queryset = Service.objects.prefetch_related('service_images').all()
    serializer_class = ServiceSerializer

class ServiceDetailView(RetrieveAPIView):
    queryset = Service.objects.prefetch_related('service_images').all()
    serializer_class = ServiceSerializer
    
class ServiceCommentCreateView(CreateAPIView):
    queryset = ServiceComment.objects.all()
    serializer_class = ServiceCommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        service_id = self.kwargs['service_id']
        service = Service.objects.get(id=service_id)
        serializer.save(user=self.request.user, service=service)

class ServiceCommentDetailView(RetrieveAPIView):
    queryset = ServiceComment.objects.all()
    serializer_class = ServiceCommentSerializer
    permission_classes = [IsAuthenticated]

class ServiceCommentUpdateView(UpdateAPIView):
    queryset = ServiceComment.objects.all()
    serializer_class = ServiceCommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
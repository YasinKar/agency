from django.urls import path
from .views import ServiceListView, ServiceDetailView, ServiceCommentCreateView, ServiceCommentDetailView, ServiceCommentUpdateView

urlpatterns = [
    path('', ServiceListView.as_view(), name='service-list'),
    path('<int:pk>/', ServiceDetailView.as_view(), name='service-detail'),
    
    path('<int:service_id>/comments/create/', ServiceCommentCreateView.as_view(), name='service-comment-create'),
    path('comments/<int:pk>/', ServiceCommentDetailView.as_view(), name='service-comment-detail'),
    path('comments/<int:pk>/update/', ServiceCommentUpdateView.as_view(), name='service-comment-update'),
]
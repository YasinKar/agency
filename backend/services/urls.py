from django.urls import path
from .views import ServiceListView, ServiceDetailView, ProjectListView

urlpatterns = [
    path('services/', ServiceListView.as_view(), name='service-list'),
    path('service/<slug:slug>', ServiceDetailView.as_view(), name='service-detail'),
    path('projects/', ProjectListView.as_view(), name='project-list'),
]
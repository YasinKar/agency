from django.contrib import admin
from django.urls import path, include
from debug_toolbar.toolbar import debug_toolbar_urls
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('api/', include([
        path('services/', include('services.urls')),
        path('site/', include('contents.urls')),
        path('schema/', SpectacularAPIView.as_view(), name='schema'),
        path('schema/swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui')
    ])),
    path('admin/', admin.site.urls),
] + debug_toolbar_urls()
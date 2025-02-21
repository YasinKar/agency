from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from .models import SiteSetting, ContactUs, FAQ
from .serializers import SiteSettingSerializer, ContactUsSerializer, FAQSerializer
        
class SiteSettingsView(RetrieveAPIView):
    serializer_class = SiteSettingSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return SiteSetting.objects.filter(is_main_setting=True).first()

class FAQView(ListAPIView):
    queryset = FAQ.objects.filter(is_active=True)
    serializer_class = FAQSerializer
    permission_classes = [AllowAny]
        
class ContactUsView(CreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer
    permission_classes = [AllowAny]
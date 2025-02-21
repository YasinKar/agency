from django.urls import path
from .views import  ContactUsView, SiteSettingsView, FAQView

urlpatterns = [
    path('contact-us/', ContactUsView.as_view(), name='contact-us'),
    path('settings/', SiteSettingsView.as_view(), name='site-settings'),
    path('FAQ/', FAQView.as_view(), name='FAQ'),
]
from django.db import models
from django.core.exceptions import ValidationError
import re

class SiteSetting(models.Model):
    domain = models.CharField(max_length=300, verbose_name='Site Domain')
    site_name = models.CharField(max_length=100, verbose_name='Site Name')
    site_logo = models.ImageField(upload_to='site_logo', verbose_name='Site Logo')
    site_icon = models.ImageField(upload_to='site_icon', null=True, blank=True, verbose_name='Site Icon')
    site_about = models.TextField(verbose_name='About the Site')
    adress = models.TextField(null=True, blank=True, verbose_name='Address')
    rules = models.TextField(verbose_name='Rules')
    phone = models.CharField(max_length=15, blank=True, null=True, verbose_name='Mobile Number')
    telegram = models.URLField(max_length=400, verbose_name='Telegram Channel URL', null=True, blank=True)
    instagram = models.URLField(max_length=400, verbose_name='Instagram Page URL', null=True, blank=True)
    email = models.CharField(max_length=200, verbose_name='Email', null=True, blank=True)
    copyright = models.CharField(max_length=200, verbose_name='Copyright Text', null=True, default='&#169; All Rights Reserved')
    maintenance_mode = models.BooleanField(default=False, verbose_name='Site Active / Inactive')
    is_main_setting = models.BooleanField(default=False, verbose_name='Set as Main Setting')
     
    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'
    
    def __str__(self):
        return f'{self.site_name} : {self.domain}'

    def clean(self):
        phone_regex = r"^(0|98)?([ ]|-|[()]){0,2}9[0-4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$"
        if self.phone and not re.match(phone_regex, self.phone):
            raise ValidationError({'phone': 'The entered mobile number is invalid.'})
    
class ElectronicSymbol(models.Model):
    url = models.URLField(max_length=200, verbose_name='Link')
    image = models.ImageField(upload_to='e_symbols', verbose_name='Image')
    is_active = models.BooleanField(verbose_name='Active / Inactive', default=True, db_index=True)
     
    class Meta:
        verbose_name = 'Electronic Symbol'
        verbose_name_plural = 'Electronic Symbols'
   
class ContactUs(models.Model):
    phone = models.CharField(max_length=15, verbose_name='Mobile Number')
    title = models.CharField(max_length=300, verbose_name='Title')
    message = models.TextField(verbose_name='Message')
    date = models.DateTimeField(auto_now_add=True, verbose_name='Date')
    
    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'
    
    def __str__(self):
        return f'Message {self.title} from {self.phone}'
    
    def clean(self):
        phone_regex = r"^(0|98)?([ ]|-|[()]){0,2}9[0-4|9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$"
        if self.phone and not re.match(phone_regex, self.phone):
            raise ValidationError({'phone': 'The entered mobile number is invalid.'})
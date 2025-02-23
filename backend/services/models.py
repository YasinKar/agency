from django.db import models
from django_mongodb_backend.fields import ObjectIdAutoField

class Service(models.Model):
    id = ObjectIdAutoField(primary_key=True)
    title = models.CharField(max_length=200, verbose_name='Title')
    icon = models.TextField(verbose_name='Icon')
    description = models.TextField(verbose_name='Description')
    thumbnail = models.ImageField(upload_to='services_thumbnail', verbose_name='Service Thumbnail')
    slug = models.SlugField(unique=True, verbose_name='Slug')
    is_active = models.BooleanField(default=True, verbose_name='Active')
    created_at = models.DateField(auto_now_add=True, verbose_name='Created At')
    
    class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'
        
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.id:
            super().save(*args, **kwargs)
        self.slug = f"{self.title.replace(' ', '-')}_{self.id}"
        super().save(*args, **kwargs)
        
class ServiceImage(models.Model):
    id = ObjectIdAutoField(primary_key=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, verbose_name='Service', related_name='service_images')
    image = models.ImageField(upload_to='services', verbose_name='Service Image')
    
    class Meta:
        verbose_name = 'Service Image'
        verbose_name_plural = 'Service Images'
        
    def __str__(self):
        return f'Image for service : {self.service.title}'

class ServiceFeature(models.Model):
    id = ObjectIdAutoField(primary_key=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, verbose_name='Service', related_name='service_features')
    key = models.CharField(max_length=100, verbose_name='Key')
    value = models.CharField(max_length=100, verbose_name='Value')
    
    class Meta:
        verbose_name = 'Service Feature'
        verbose_name_plural = 'Service Features'
        
    def __str__(self):
        return f'Feature for service : {self.service.title}'
    
class Project(models.Model):
    id = ObjectIdAutoField(primary_key=True)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, verbose_name='Service', related_name='service_projects')
    title = models.CharField(max_length=200, verbose_name='Title')
    description = models.TextField(verbose_name='Description')
    demo = models.URLField(max_length=500, verbose_name='Demo')
    thumbnail = models.ImageField(upload_to='services_thumbnail', verbose_name='Service Thumbnail')
    slug = models.SlugField(unique=True, verbose_name='Slug')
    is_active = models.BooleanField(default=True, verbose_name='Active')
    created_at = models.DateField(auto_now_add=True, verbose_name='Created At')
    
    class Meta:
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'
        
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.id:
            super().save(*args, **kwargs)
        self.slug = f"{self.title.replace(' ', '-')}_{self.id}"
        super().save(*args, **kwargs)
from django.db import models
from users.models import User
from django.core.validators import MinValueValidator

class Service(models.Model):
    title = models.CharField(max_length=200, verbose_name='Title')
    description = models.TextField(verbose_name='Description')
    is_active = models.BooleanField(default=True, verbose_name='Active')
    
    class Meta:
        verbose_name = 'Service'
        verbose_name_plural = 'Services'
        
    def __str__(self):
        return self.title
        
class ServiceImage(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, verbose_name='Service', related_name='service_images')
    image = models.ImageField(upload_to='services', verbose_name='Service Image')
    
    class Meta:
        verbose_name = 'Service Image'
        verbose_name_plural = 'Service Images'
        
    def __str__(self):
        return f'Image for service : {self.service.title}'
    
class ServiceComment(models.Model):
    title = models.CharField(max_length=200, verbose_name='Title')
    message = models.TextField(verbose_name='Message')
    replay = models.ForeignKey(
    'self',
    on_delete=models.CASCADE,
    null=True,
    blank=True,
    verbose_name='Reply',
    related_name='replies'
    )
    service = models.ForeignKey(Service, on_delete=models.CASCADE, verbose_name='Service', related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='User')
    recommend = models.BooleanField(default=True, verbose_name='Recommend')
    date = models.DateTimeField(auto_now_add=True, verbose_name='Date')
    likes = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='Likes')
    dislikes = models.IntegerField(default=0, validators=[MinValueValidator(0)], verbose_name='Dislikes')
        
    def __str__(self):
        return f'Comment for {self.service.title} from {self.user.username}'

    class Meta:
        verbose_name = 'Service Comment'
        verbose_name_plural = 'Service Comments'
# Generated by Django 5.0.3 on 2024-12-04 23:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=15, verbose_name='Mobile Number')),
                ('title', models.CharField(max_length=300, verbose_name='Title')),
                ('message', models.TextField(verbose_name='Message')),
                ('date', models.DateTimeField(auto_now_add=True, verbose_name='Date')),
            ],
            options={
                'verbose_name': 'Contact',
                'verbose_name_plural': 'Contacts',
            },
        ),
        migrations.CreateModel(
            name='ElectronicSymbol',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(verbose_name='Link')),
                ('image', models.ImageField(upload_to='e_symbols', verbose_name='Image')),
                ('is_active', models.BooleanField(db_index=True, default=True, verbose_name='Active / Inactive')),
            ],
            options={
                'verbose_name': 'Electronic Symbol',
                'verbose_name_plural': 'Electronic Symbols',
            },
        ),
        migrations.CreateModel(
            name='SiteSetting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain', models.CharField(max_length=300, verbose_name='Site Domain')),
                ('site_name', models.CharField(max_length=100, verbose_name='Site Name')),
                ('site_logo', models.ImageField(upload_to='site_logo', verbose_name='Site Logo')),
                ('site_icon', models.ImageField(blank=True, null=True, upload_to='site_icon', verbose_name='Site Icon')),
                ('site_about', models.TextField(verbose_name='About the Site')),
                ('adress', models.TextField(blank=True, null=True, verbose_name='Address')),
                ('rules', models.TextField(verbose_name='Rules')),
                ('phone', models.CharField(blank=True, max_length=15, null=True, verbose_name='Mobile Number')),
                ('telegram', models.URLField(blank=True, max_length=400, null=True, verbose_name='Telegram Channel URL')),
                ('instagram', models.URLField(blank=True, max_length=400, null=True, verbose_name='Instagram Page URL')),
                ('email', models.CharField(blank=True, max_length=200, null=True, verbose_name='Email')),
                ('copyright', models.CharField(default='&#169; All Rights Reserved', max_length=200, null=True, verbose_name='Copyright Text')),
                ('maintenance_mode', models.BooleanField(default=False, verbose_name='Site Active / Inactive')),
                ('is_main_setting', models.BooleanField(default=False, verbose_name='Set as Main Setting')),
            ],
            options={
                'verbose_name': 'Site Settings',
                'verbose_name_plural': 'Site Settings',
            },
        ),
    ]

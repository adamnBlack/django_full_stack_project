# Generated by Django 2.2.6 on 2020-02-24 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Order', '0005_auto_20200217_0315'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='country',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderitem',
            name='county',
            field=models.CharField(default=None, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderitem',
            name='postcode',
            field=models.CharField(default=123456, max_length=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderitem',
            name='street_address',
            field=models.CharField(default='123 Main Ave', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderitem',
            name='town_or_city',
            field=models.CharField(default='Singapore', max_length=50),
            preserve_default=False,
        ),
    ]
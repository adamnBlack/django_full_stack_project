# Generated by Django 2.2.6 on 2020-02-15 07:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Order', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_number_token', models.CharField(max_length=256)),
                ('ordered_quantity', models.IntegerField()),
                ('ordered_item', models.CharField(max_length=100)),
                ('total_payment', models.DecimalField(decimal_places=2, max_digits=6)),
                ('status', models.BooleanField(default=True)),
                ('payment_time', models.DateTimeField(auto_now_add=True)),
                ('customer', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

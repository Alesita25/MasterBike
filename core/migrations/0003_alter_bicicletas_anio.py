# Generated by Django 4.0.5 on 2022-06-25 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_bicicletas_marca_modelo_tipo_delete_clientes_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bicicletas',
            name='anio',
            field=models.IntegerField(verbose_name='Año'),
        ),
    ]

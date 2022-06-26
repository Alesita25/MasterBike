from django.db import models

# Create your models here.


class marca(models.Model):
    idMarca=models.IntegerField(primary_key=True,verbose_name='Id de marca')
    nombreMarca = models.CharField(max_length=50, verbose_name='Nombre marca')

    def __str__(self):
        return self.nombreMarca

class modelo(models.Model):
    idModelo =models.IntegerField(primary_key=True,verbose_name='Id de categoria')
    nombreModelo = models.CharField(max_length=50, verbose_name='Nombre de la Categoria')

    def __str__(self):
        return self.nombreModelo

class Tipo(models.Model):
    idTipo =models.IntegerField(primary_key=True,verbose_name='Id tipo')
    nombreTipo = models.CharField(max_length=50, verbose_name='Nombre tipo')

    def __str__(self):
        return self.nombreTipo

#Modelo para el vehiculo

class bicicletas(models.Model):
    id = models.CharField(max_length=6,primary_key=True, verbose_name='Id_ciclo')
    marca = models.ForeignKey(marca, on_delete=models.CASCADE)
    modelo = models.ForeignKey(modelo, on_delete=models.CASCADE)
    anio = models.IntegerField(verbose_name='Año')
    tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)

    def __str__(self):
        return self.id




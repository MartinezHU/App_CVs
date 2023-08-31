from django.db import models


# Create your models here.


class ListaValores(models.Model):
    texto = models.CharField(max_length=50)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class Plantilla(models.Model):
    nombre = models.CharField(max_length=250)
    lista1 = models.ManyToManyField(ListaValores)

    def __str__(self):
        return "Valor: {}".format(self.nombre)

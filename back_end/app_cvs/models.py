from django.contrib.postgres.fields import ArrayField
from django.db import models


# Create your models here.

class RedesSociales(models.Model):
    url_red = models.CharField(max_length=200)
    texto = models.CharField(max_length=250)
    logo = models.ImageField(upload_to='main/imagenes/redesSociales')

    def __str__(self):
        return "Valor: {}".format(self.texto)


class Plantilla(models.Model):
    nombre = models.CharField(max_length=250)
    titulo = models.CharField(max_length=250, null=True)
    subtitulo = models.CharField(max_length=250, null=True)
    fotoPerfil = models.ImageField(upload_to='main/imagenes/fotosPerfil', null=True)
    contacto = ArrayField(models.CharField(max_length=250, blank=True, null=True),null=True)
    presentacion = models.CharField(max_length=2500, null=True)
    perfilProfesional = ArrayField(models.CharField(max_length=250, blank=True, null=True),null=True)
    intereses =ArrayField(models.CharField(max_length=250, blank=True, null=True),null=True)
    historialEmpleo = ArrayField(models.CharField(max_length=250, blank=True, null=True),null=True)
    historialEducativo = ArrayField(models.CharField(max_length=250, blank=True, null=True),null=True)
    otros = ArrayField(models.CharField(max_length=250, blank=True, null=True),null=True)
    software = ArrayField(models.CharField(max_length=250, blank=True, null=True),null=True)
    tipoPlantilla = models.CharField(max_length=50, null=True)


    def __str__(self):
        return "Valor: {}".format(self.nombre)

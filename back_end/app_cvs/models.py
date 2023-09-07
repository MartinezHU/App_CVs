from django.db import models


# Create your models here.

class ListaValores(models.Model):
    texto = models.CharField(max_length=50)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class Contacto(ListaValores):
    pass


class PerfilProfesional(ListaValores):
    pass


class Intereses(ListaValores):
    pass


class HistorialEmpleo(ListaValores):
    pass


class HistorialEducativo(ListaValores):
    pass


class Otros(ListaValores):
    pass


class Software(ListaValores):
    pass


class RedesSociales(models.Model):
    url_red = models.CharField(max_length=200)
    texto = models.CharField(max_length=250)
    logo = models.ImageField(upload_to='main/imagenes/redesSociales')

    def __str__(self):
        return "Valor: {}".format(self.texto)


class Plantilla(models.Model):
    nombre = models.CharField(max_length=250)
    titulo = models.CharField(max_length=250)
    subtitulo = models.CharField(max_length=250)
    fotoPerfil = models.ImageField(upload_to='main/imagenes/fotosPerfil', null=True)
    contacto = models.ManyToManyField(Contacto)
    presentacion = models.CharField(max_length=2500)
    perfilProfesional = models.ManyToManyField(PerfilProfesional)
    intereses = models.ManyToManyField(Intereses)
    historialEmpleo = models.ManyToManyField(HistorialEmpleo)
    historialEducativo = models.ManyToManyField(HistorialEducativo)
    otros = models.ManyToManyField(Otros)
    software = models.ManyToManyField(Software)
    redesSociales = models.ManyToManyField(RedesSociales)
    tipoPlantilla = models.CharField(max_length=50)

    def __str__(self):
        return "Valor: {}".format(self.nombre)

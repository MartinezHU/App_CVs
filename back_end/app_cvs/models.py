from django.db import models


# Create your models here.


class Contacto(models.Model):
    texto = models.CharField(max_length=50)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class PerfilProfesional(models.Model):
    texto = models.CharField(max_length=250)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class Intereses(models.Model):
    texto = models.CharField(max_length=250)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class HistorialEmpleo(models.Model):
    texto = models.CharField(max_length=250)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class HistorialEducativo(models.Model):
    texto = models.CharField(max_length=250)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class Otros(models.Model):
    texto = models.CharField(max_length=250)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class Software(models.Model):
    texto = models.CharField(max_length=250)

    def __str__(self):
        return "Valor: {}".format(self.texto)


class RedesSociales(models.Model):
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

    def __str__(self):
        return "Valor: {}".format(self.nombre)

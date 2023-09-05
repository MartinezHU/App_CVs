from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from app_cvs.models import *
from app_cvs.serializers import *


# Create your views here.


class Contacto(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer
    permission_classes = [AllowAny]


class PerfilProfesional(viewsets.ModelViewSet):
    queryset = PerfilProfesional.objects.all()
    serializer_class = PerfilProfesionalSerializer
    permission_classes = [AllowAny]


class Intereses(viewsets.ModelViewSet):
    queryset = Intereses.objects.all()
    serializer_class = InteresesSerializer
    permission_classes = [AllowAny]


class HistorialEmpleo(viewsets.ModelViewSet):
    queryset = HistorialEmpleo.objects.all()
    serializer_class = HistorialEmpleoSerializer
    permission_classes = [AllowAny]


class HistorialEducativo(viewsets.ModelViewSet):
    queryset = HistorialEducativo.objects.all()
    serializer_class = HistorialEducativoSerializer
    permission_classes = [AllowAny]


class Otros(viewsets.ModelViewSet):
    queryset = Otros.objects.all()
    serializer_class = OtrosSerializer
    permission_classes = [AllowAny]


class Software(viewsets.ModelViewSet):
    queryset = Software.objects.all()
    serializer_class = SoftwareSerializer
    permission_classes = [AllowAny]


class RedesSociales(viewsets.ModelViewSet):
    queryset = RedesSociales.objects.all()
    serializer_class = RedesSocialesSerializer
    permission_classes = [AllowAny]


class Plantilla(viewsets.ModelViewSet):
    queryset = Plantilla.objects.all()
    serializer_class = PlantillaSerializer
    permission_classes = [AllowAny]

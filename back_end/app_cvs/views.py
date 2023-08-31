from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from app_cvs.models import *
from app_cvs.serializers import *


# Create your views here.


class ListaValores(viewsets.ModelViewSet):
    queryset = ListaValores.objects.all()
    serializer_class = ListaValoresSerializer
    permission_classes = [AllowAny]


class Plantilla(viewsets.ModelViewSet):
    queryset = Plantilla.objects.all()
    serializer_class = PlantillaSerializer
    permission_classes = [AllowAny]
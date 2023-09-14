from django.db import transaction
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from app_cvs.models import *
from app_cvs.serializers import *


# Create your views here.


class Contactos(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['GET'])
    def obtener_ultimo_contacto(self, request):
        ultimo_contacto = Contacto.objects.latest('id')
        print(ultimo_contacto)
        serializer = ContactoSerializer(ultimo_contacto, context={'request': request})
        return Response(serializer.data)


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


class HistorialesEducativos(viewsets.ModelViewSet):
    queryset = HistorialEducativo.objects.all()
    serializer_class = HistorialEducativoSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['GET'])
    def obtener_ultimo_historialeducativo(self, request):
        ultimo_historialEducativo = HistorialEducativo.objects.latest('id')
        serializer = HistorialEducativoSerializer(ultimo_historialEducativo, context={'request': request})
        return Response(serializer.data)


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

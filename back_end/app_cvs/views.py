from django.db import transaction
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from app_cvs.serializers import *
from app_cvs.models import *


# Create your views here.


class Contactos(viewsets.ModelViewSet):
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


class HistorialesEducativos(viewsets.ModelViewSet):
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


class Plantillas(viewsets.ModelViewSet):
    queryset = Plantilla.objects.all()
    serializer_class = PlantillaSerializer
    permission_classes = [AllowAny]

    @transaction.atomic()
    @action(detail=False, methods=['GET'])
    def obtener_ultimo_elemento(self, request):
        tipoElemento = request.query_params.get('tipoElemento')
        elemento = request.query_params.get('elemento')
        id_plantilla = request.query_params.get('id_plantilla')
        plantilla = Plantilla.objects.get(pk=id_plantilla)

        if tipoElemento == 'contacto':
            contacto = Contacto.objects.create()
            contacto.texto = elemento
            contacto.save()
            ultimo_contacto = Contacto.objects.latest('id')
            plantilla.contacto.add(ultimo_contacto)
            plantilla.save()
            serializer = ContactoSerializer(ultimo_contacto, context={'request': request})
        else:  # tipoElemento == 'historialeducativo':
            histEdu = HistorialEducativo.objects.create()
            histEdu.texto = elemento
            histEdu.save()
            ultimo_historialEdu = HistorialEducativo.objects.latest('id')
            plantilla.historialEducativo.add(ultimo_historialEdu)
            plantilla.save()
            serializer = HistorialEducativoSerializer(ultimo_historialEdu, context={'request': request})

        return Response(serializer.data)

from django.db import transaction
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from app_cvs.serializers import *
from app_cvs.models import *


# Create your views here.


class RedesSociales(viewsets.ModelViewSet):
    queryset = RedesSociales.objects.all()
    serializer_class = RedesSocialesSerializer
    permission_classes = [AllowAny]


class Plantillas(viewsets.ModelViewSet):
    queryset = Plantilla.objects.all()
    serializer_class = PlantillaSerializer
    permission_classes = [AllowAny]

    # @transaction.atomic()
    # @action(detail=False, methods=['GET'])
    # def crear_aniadir_elemento(self, request):
    #     tipoElemento = request.query_params.get('tipoElemento')
    #     elemento = request.query_params.get('elemento')
    #     id_plantilla = request.query_params.get('id_plantilla')
    #     plantilla = Plantilla.objects.get(pk=id_plantilla)
    #
    #     if tipoElemento == 'contacto':
    #         contacto = Contacto.objects.create()
    #         contacto.texto = elemento
    #         contacto.save()
    #         plantilla.contacto.add(contacto)
    #
    #     else:  # tipoElemento == 'historialeducativo':
    #         histEdu = HistorialEducativo.objects.create()
    #         histEdu.texto = elemento
    #         histEdu.save()
    #         plantilla.historialEducativo.add(histEdu)
    #
    #     plantilla.save()
    #
    #     return Response()

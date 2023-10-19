from rest_framework import serializers

from app_cvs.models import *


class RedesSocialesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RedesSociales
        fields = ('url', 'id', 'texto', 'url_red', 'logo')


class PlantillaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Plantilla
        fields = ('url',
                  'id',
                  'nombre',
                  'titulo',
                  'subtitulo',
                  'fotoPerfil',
                  'presentacion',
                  'contacto',
                  'perfilProfesional',
                  'intereses',
                  'historialEmpleo',
                  'historialEducativo',
                  'otros',
                  'software',

                  )

from rest_framework import serializers

from app_cvs.models import *


class ContactoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contacto
        fields = ('url', 'id', 'texto')


class PerfilProfesionalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PerfilProfesional
        fields = ('url', 'id', 'texto')


class InteresesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Intereses
        fields = ('url', 'id', 'texto')


class HistorialEmpleoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HistorialEmpleo
        fields = ('url', 'id', 'texto')


class HistorialEducativoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HistorialEducativo
        fields = ('url', 'id', 'texto')


class OtrosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Otros
        fields = ('url', 'id', 'texto')


class RedesSocialesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RedesSociales
        fields = ('url', 'id', 'texto', 'logo')


class SoftwareSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Software
        fields = ('url', 'id', 'texto')


class PlantillaSerializer(serializers.HyperlinkedModelSerializer):
    contacto = serializers.PrimaryKeyRelatedField(many=True, queryset=Contacto.objects.all())
    datos_contacto = ContactoSerializer(source='contacto', read_only=True, many=True)

    perfilProfesional = serializers.PrimaryKeyRelatedField(many=True, queryset=PerfilProfesional.objects.all())
    datos_perfilProfesional = PerfilProfesionalSerializer(source='perfilProfesional', read_only=True, many=True)

    intereses = serializers.PrimaryKeyRelatedField(many=True, queryset=Intereses.objects.all())
    datos_intereses = InteresesSerializer(source='intereses', read_only=True, many=True)

    historialEmpleo = serializers.PrimaryKeyRelatedField(many=True, queryset=HistorialEmpleo.objects.all())
    datos_historialEmpleo = HistorialEmpleoSerializer(source='historialEmpleo', read_only=True, many=True)

    historialEducativo = serializers.PrimaryKeyRelatedField(many=True, queryset=HistorialEducativo.objects.all())
    datos_historialEducativo = HistorialEducativoSerializer(source='historialEducativo', read_only=True, many=True)

    otros = serializers.PrimaryKeyRelatedField(many=True, queryset=Otros.objects.all())
    datos_otros = OtrosSerializer(source='otros', read_only=True, many=True)

    redesSociales = serializers.PrimaryKeyRelatedField(many=True, queryset=RedesSociales.objects.all())
    datos_redesSociales = RedesSocialesSerializer(source='redesSociales', read_only=True, many=True)

    software = serializers.PrimaryKeyRelatedField(many=True, queryset=Software.objects.all())
    datos_software = SoftwareSerializer(source='software', read_only=True, many=True)

    class Meta:
        model = Plantilla
        fields = ('url',
                  'id',
                  'nombre',
                  'titulo',
                  'subtitulo',
                  'fotoPerfil',
                  'presentacion',
                  'contacto', 'datos_contacto',
                  'perfilProfesional', 'datos_perfilProfesional',
                  'intereses', 'datos_intereses',
                  'historialEmpleo', 'datos_historialEmpleo',
                  'historialEducativo', 'datos_historialEducativo',
                  'otros', 'datos_otros',
                  'software', 'datos_software',
                  'redesSociales', 'datos_redesSociales',
                  )
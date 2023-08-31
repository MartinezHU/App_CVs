from rest_framework import serializers

from app_cvs.models import *


class ListaValoresSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ListaValores
        fields = ('url', 'id', 'texto')


class PlantillaSerializer(serializers.HyperlinkedModelSerializer):
    #lista1 = ListaValoresSerializer(read_only=True, many=True)
    lista1 = serializers.PrimaryKeyRelatedField(many=True, queryset=ListaValores.objects.all())

    class Meta:
        model = Plantilla
        fields = ('url', 'id', 'nombre', 'lista1')

    def create(self, validated_data):
        lista1 = validated_data.pop('lista1', [])
        lista = Plantilla.objects.create(**validated_data)
        for valor in lista1:
            lista.lista1.add(valor)
        return lista

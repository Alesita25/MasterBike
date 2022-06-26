from dataclasses import fields
from django import forms
from django.forms import ModelForm
from .models import bicicletas

class ArriendoForm(ModelForm):

    class Meta:
        model= bicicletas
        fields = ['id','marca','modelo','tipo','anio']

  
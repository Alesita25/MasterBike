from django.contrib import admin

from core.views import solicitudesArriendo
from .models import bicicletas,marca,modelo,Tipo
# Register your models here.

admin.site.register(bicicletas)
admin.site.register(marca)
admin.site.register(modelo)
admin.site.register(Tipo)
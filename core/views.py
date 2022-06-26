from django.shortcuts import render, redirect
from core.forms import ArriendoForm
from .models import bicicletas

# Create your views here.

def home(request):
    return render(request, 'core/home.html')

def cotizaciones(request):
    return render(request, 'core/cotizaciones.html')

def ingreso_pedidos(request):
    return render(request, 'core/ingreso_pedidos.html')

def orden_compra(request):
    return render(request, 'core/orden_compra.html')
def proveedores(request):
    return render(request, 'core/proveedores.html')
def guia_despacho(request):
    return render(request, 'core/guia_despacho.html')
def inventario(request):
    return render(request, 'core/inventario.html')

def solicitudesArriendo(request):
    return render(request, 'core/solicitudesArriendo.html')
def clientes(request):
    return render(request, 'core/clientes.html')


def mantenedorBicicleta(request):
    bici= ArriendoForm()
    bicicleta=bicicletas.objects.all()
    

    datos={
        'form': bici,
        'bicicleta':bicicleta
        
    }
    if request.method=='POST':
        formulario = ArriendoForm(request.POST)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Registro guardado Correctamente"

    return render(request, 'core/mantenedorBicicleta.html',datos)

def mod_bicicleta(request,id):
     bicicleta = bicicletas.objects.get(id=id)
     datos = {
             'form': ArriendoForm(instance=bicicleta)
     }
     if request.method == 'POST':
         formulario = ArriendoForm(data=request.POST,instance=bicicleta)
         if formulario.is_valid:
             formulario.save()
             datos['mensaje'] = "Datos modificados correctamente"
     return render(request, 'core/mod_bicicleta.html',datos)

def bor_bicicletas(request,id):
     bicicleta = bicicletas.objects.get(id=id)
     bicicleta.delete()
     return redirect(to="mantenedorBicicleta")
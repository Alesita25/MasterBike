from django.urls import URLPattern, path
from .views import guia_despacho, home, clientes, mod_bicicleta,bor_bicicletas,cotizaciones,ingreso_pedidos,orden_compra,proveedores,inventario,solicitudesArriendo,mantenedorBicicleta


urlpatterns = [
    path('', home, name="home"),
    path('clientes', clientes, name="clientes"),
    path('mod_bicicleta/<id>',mod_bicicleta,name='mod_bicicleta'),
    path('bor_bicicletas/<id>',bor_bicicletas,name='bor_bicicletas'),
    path('cotizaciones', cotizaciones, name="cotizaciones"),
    path('ingreso_pedidos', ingreso_pedidos, name="ingreso_pedidos"),
    path('orden_compra', orden_compra, name="orden_compra"),
    path('proveedores', proveedores, name="proveedores"),
    path('guia_despacho', guia_despacho, name="guia_despacho"),
    path('inventario', inventario, name="inventario"),
    path('solicitudesArriendo', solicitudesArriendo, name="solicitudesArriendo"),
    path('mantenedorBicicleta', mantenedorBicicleta, name="mantenedorBicicleta")
]
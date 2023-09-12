from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path, reverse_lazy
from django.views.generic import RedirectView
from rest_framework.routers import DefaultRouter

from app_cvs import views

# from main import views

router = DefaultRouter()
router.register(r'contacto', views.Contactos, basename='contacto')
router.register(r'perfilprofesional', views.PerfilProfesional, basename='perfilprofesional')
router.register(r'intereses', views.Intereses, basename='intereses')
router.register(r'historialempleo', views.HistorialEmpleo, basename='historialempleo')
router.register(r'historialeducativo', views.HistorialEducativo, basename='historialeducativo')
router.register(r'otros', views.Otros, basename='otros')
router.register(r'software', views.Software, basename='software')
router.register(r'redessociales', views.RedesSociales, basename='redessociales')
router.register(r'plantilla', views.Plantilla, basename='plantilla')

urlpatterns = [
    path('', include(router.urls)),
    # path('api-user-login/', views.UserLogIn.as_view()),
    # path('registro/', views.RegistroUsuario.as_view()),
    path(r'api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^$', RedirectView.as_view(url=reverse_lazy('api-root'), permanent=False)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

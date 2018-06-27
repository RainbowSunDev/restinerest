from django.urls import path, include
from django.views import generic

urlpatterns = [
    path('api/', include('api.urls')),
    path('', generic.TemplateView.as_view(template_name='index.html')),  # changed: This is awesome
]

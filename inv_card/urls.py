from django.urls import path
from django.urls import reverse
from . import views


urlpatterns = [
	path('', views.index)
]
from django.contrib import admin
from django.contrib.auth.models import User,auth
from django.urls import path
from . import views
urlpatterns = [
path('', views.index, name='index'),
path('index.html',views.index_view),
path('contact.html',views.Contact_us_view),
path('courses.html',views.courses),
path('about.html',views.about),
path('register.html',views.Register_list),
]
from django.conf.urls import url
from . import views

app_name = 'main'

urlpatterns = [
    url(r'^$', views.home,name='home')
    # url(r'^', views.contact,name='contact')
    # url(r'^$', views.contact,name='contact')
]

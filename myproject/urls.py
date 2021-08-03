from django.conf.urls import include,url
from django.contrib import admin
from django.urls import path
from  main import views


app_name = 'main'

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'',include('main.urls'))
    # url(r'^home/', views.home, name='home'),
    # url(r'^index/', views.index, name='index'),
    # url(r'^contact/', views.contact, name='contact')
]

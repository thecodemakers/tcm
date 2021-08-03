from django.shortcuts import render
from django.http import HttpResponse
from main import views
from .models import Main, Contact



# Create your views here.
def home(request):
    return render(request,'home.html')

def index(request):
    return render(request,'index.html')

def contact(request):
    if request.method == 'POST':
        print(request)
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        subject = request.POST.get('subject', '')
        message = request.POST.get('message', '')
        print(name, email, subject, message)
        contact = Contact(name=name, email=email, subject=subject, message=message)
        contact.save()
    return render(request,'home.html')
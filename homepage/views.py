from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Register,Contact_us
from .forms import Contact_us_form
from django.contrib import messages
# Create your views here.

def index(request):
    return render(request,'index.html')

def index_view(request):
    return render(request,'index.html')

def contact(request):
    return render(request,'contact.html')

def courses(request):
    return render(request,'courses.html')

def about(request):
    return render(request,'about.html')

def Register_list(request):
    customers = Register.objects.all()
    return render(request, 'register.html', {'customers': customers})

def Contact_us_view(request):
    if request.method == 'POST':
        form = Contact_us_form(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Thank you! We will contact you shortly.")
            return redirect('contact.html')   
    else:
        form = Contact_us_form()

    return render(request, 'contact.html', {'form': form})



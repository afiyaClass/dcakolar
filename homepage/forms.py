from django import forms
from .models import Contact_us
class Contact_us_form(forms.ModelForm):
    class Meta:
        model = Contact_us
        fields = ['name', 'email', 'phone']

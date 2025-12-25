from django.contrib import admin
from .models import Register,Contact_us

# Register your models here.


class Reg_Admin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at')
    search_fields = ('name', 'email')

admin.site.register(Register,Reg_Admin)

admin.site.register(Contact_us)
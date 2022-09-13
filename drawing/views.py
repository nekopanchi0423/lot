from django.shortcuts import redirect, render, resolve_url
from django.views.generic import CreateView, ListView, DeleteView
from django.urls import reverse_lazy
from .models import UserData
from .forms import UserDataForm

class UserDataCreateView(CreateView):
    model = UserData
    template_name = "drawing/create.html"
    form_class = UserDataForm

    def get_success_url(self):
        return resolve_url('drawing:index')

    def form_vaild(self,form):
        form.instance.user = self.request.user
        return super().form_vaild(form)

class UserDataDeleteView(DeleteView):
    model = UserData
    template_name = "drawing/delete.html"
    success_url = reverse_lazy("drawing:index")

class UserDataListView(ListView):
    model = UserData
    template_name = "drawing/index.html"

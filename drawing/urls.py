from django.urls import path
from . import views

app_name = "drawing"

urlpatterns = [
    path("", views.UserDataListView.as_view(), name="index"),
    path("create/", views.UserDataCreateView.as_view(), name="userdata_create"),
    path("delete/<int:pk>", views.UserDataDeleteView.as_view(), name="userdata_delete"),
]
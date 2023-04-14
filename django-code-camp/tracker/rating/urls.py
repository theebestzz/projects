from django.urls import path

from . import views

urlpatterns = [
	path('', views.dashboard, name="dashboard"),
	path('games/', views.games, name="games"),
	path('games/<slug:slug>', views.ratings, name="ratings"),
	path('renew/', views.renew, name="renew"),
]

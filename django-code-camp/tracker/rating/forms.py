from django.db import models
from .models import *
from django import forms


class newGameForm(forms.ModelForm):

	class Meta:
		model = Game
		fields = ("bggid", )

		def __init__(self, *args, **kwargs):
			super(newGameForm, self).__init__(*args, **kwargs)
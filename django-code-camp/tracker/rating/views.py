from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.models import User
from django.urls import reverse
from django.db.models import Q, Min, F, When
from datetime import datetime, date, time, timedelta

from .models import *
from .utils import get_rating, get_game
from .forms import newGameForm

import ssl
ssl._create_default_https_context = ssl._create_unverified_context
import random

def dashboard(request):
	labels = []
	
	lab = Ratings.objects.values_list('updated_on', flat=True).distinct()
	lab = lab.order_by('updated_on')

	games = Game.objects.all()

	for l in lab:
		labels.append(l.strftime('%Y-%m-%d'))

	context = {
		'labels': labels,
		'games': games,
	}

	print(datetime.now() - timedelta(days=7))

	return render(request, 'dashboard.html', context)



def renew(request):
	games = Game.objects.all().values('bggid', 'id')
	for bggid in games:
		gid = bggid['id']
		bggid = str(bggid['bggid'])

		url = 'https://boardgamegeek.com/xmlapi2/thing?id=' + bggid + '&stats=1'

		data = get_rating(url)

		voters = data['voters']['value']
		average_rating = data['average_rating']['value']
		geek_rating = data['geek_rating']['value']
		rank_overall = data['rank_overall']['value']
		strategy_rank = data['strategy_rank']
		customizable_rank = data['customizable_rank']
		thematic_rank = data['thematic_rank']
		abstract_rank = data['abstract_rank']
		family_rank = data['family_rank']
		children_rank = data['children_rank']
		party_rank = data['party_rank']
		wargame_rank = data['wargame_rank']
		
		today = datetime.now()

		Ratings.objects.update_or_create(updated_on=today, game_id=gid, defaults={'voters':voters, 'average_rating':average_rating, 'geek_rating':geek_rating, 'rank_overall':rank_overall, 'strategy_rank':strategy_rank, 'customizable_rank':customizable_rank, 'thematic_rank':thematic_rank, 'abstract_rank':abstract_rank, 'family_rank':family_rank, 'children_rank':children_rank, 'party_rank':party_rank, 'wargame_rank':wargame_rank})
	

	
	return redirect(request.META['HTTP_REFERER'])

def games(request):
	games = Game.objects.all()

	r = lambda: random.randint(0,255)

	color = "#%02X%02X%02X" % (r(),r(),r())

	if request.method == 'POST':		
		form = newGameForm(request.POST)
		

		if form.is_valid():
			bggid = form.cleaned_data['bggid']
			bggid = str(bggid)
			url = 'https://boardgamegeek.com/xmlapi2/thing?id=' + bggid + '&stats=1'
			data = get_game(url)
			name = data['name']
			photo = data['photo']
			
			form = form.save(commit=False)
			form.name = name
			form.color = color
			form.photo_link = photo
			form.bggid = int(bggid)
			form.save()


			return redirect(request.META['HTTP_REFERER'])
	else:
		form = newGameForm()

	context = {
		'games': games,
		'form': form,
	}

	return render(request, 'games.html', context)

def ratings(request, slug):
	
	game = get_object_or_404(Game, slug=slug)
	name = game.name
	gid = game.id


	labels = []
	
	lab = Ratings.objects.values_list('updated_on', flat=True).distinct()
	lab = lab.order_by('updated_on')

	for l in lab:
		labels.append(l.strftime('%Y-%m-%d'))

	ratings = Ratings.objects.filter(game=game.id).order_by('-updated_on')

	for rat in ratings:
		print(rat.strategy_rank)
		
	context = {
		'game': game,
		'name': name,
		'ratings': ratings,
		'labels': labels,
	}

	return render(request, 'ratings.html', context)
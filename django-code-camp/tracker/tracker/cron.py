from django.conf import settings
from django.db import models
from datetime import datetime
from django.shortcuts import render, get_object_or_404, redirect

from django.contrib.auth.models import User
from rating.models import Game, Ratings
from rating.utils import get_rating, get_game

from django.db.models import Q, Sum, Count
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

def monthly_report():
	print("Monthly report")
	games = Game.objects.all()

	context = {
		'games': games,
	}

	subject = "BGG Tracker - Monthly Report"
	html_message = render_to_string(settings.BASE_DIR + '/templates/reports/monthly.html', context)
	plain_message = strip_tags(html_message)
	from_email = 'reports@tracker.com'
	to = ['bojandrango@gmail.com']

	send_mail(subject, plain_message, from_email, to, html_message=html_message)

def weekly_report():
	print("Weekly report")
	games = Game.objects.all()

	context = {
		'games': games,
	}

	subject = "BGG Tracker - Weekly Report"
	html_message = render_to_string(settings.BASE_DIR + '/templates/reports/weekly.html', context)
	plain_message = strip_tags(html_message)
	from_email = 'reports@tracker.com'
	to = ['bojandrango@gmail.com']

	send_mail(subject, plain_message, from_email, to, html_message=html_message)

	print("Sent")

def refresh():
	print("Cron job start")
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
	
	print("Cron job ended")
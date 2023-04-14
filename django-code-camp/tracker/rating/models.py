from django.conf import settings
from django.db import models
from datetime import datetime, date, time, timedelta
from django.contrib.auth.models import User
from django.conf.urls.static import static
from django.utils.text import slugify
from imagekit.models import ProcessedImageField
from imagekit.processors import SmartResize, ResizeToFill
from django.core.files import File
from urllib.request import urlopen
from tempfile import NamedTemporaryFile
from django.db.models import Q, Sum, Count

def upload_to(instance, filename):
	# Remember to change this to username
	return 'images/%s' %(filename)

class Game(models.Model):
	name = models.CharField(max_length=250)
	bggid = models.IntegerField()
	photo_link = models.CharField(max_length=500)
	photo = ProcessedImageField(upload_to=upload_to, processors=[ResizeToFill(345, 345)], format='JPEG', options={'quality': 100}, null=True, blank=True)
	color = models.CharField(max_length=15)
	slug =  models.SlugField(max_length=250, null=False, unique=True, blank=True)
	added_on = models.DateField(default=datetime.now)

	def __str__(self):
		return self.name

	def month_percent(self):
		month_ago = datetime.now() - timedelta(days=30)
		today = datetime.now()

		gid = self.id

		ma = Ratings.objects.get(Q(game=gid) & Q(updated_on=month_ago))
		month_average = int(ma.average_rating)

		ca = Ratings.objects.get(Q(game=gid) & Q(updated_on=today))
		current_average = int(ca.average_rating)

		if month_average > current_average:
			subtraction = month_average - current_average
			division = subtraction / week_average
			percent =  division * 100

			return percent

		elif current_average > month_average:
			subtraction = current_average - month_average
			division = subtraction / current_average
			percent = division * 100

			return percent

		else:
			percent = 0

			return percent


		
	def week_percent(self):
		
		week_ago = datetime.now() - timedelta(days=7)
		today = datetime.now()

		gid = self.id

		wa = Ratings.objects.get(Q(game=gid) & Q(updated_on=week_ago))
		week_average = int(wa.average_rating)

		ca = Ratings.objects.get(Q(game=gid) & Q(updated_on=today))
		current_average = int(ca.average_rating)

		if week_average > current_average:
			subtraction = week_average - current_average
			division = subtraction / week_average
			percent =  division * 100

			return percent

		elif current_average > week_average:
			subtraction = current_average - week_average
			division = subtraction / current_average
			percent = division * 100

			return percent

		else:
			percent = 0
			
			return percent

	# Get Montly Average
	def month_avg(self):
		month_ago = datetime.now() - timedelta(days=30)
		today = datetime.now()

		gid = self.id
		ma = Ratings.objects.get(Q(game=gid) & Q(updated_on=month_ago))
		month_average = ma.average_rating

		return month_average

	# Get Weekly Average
	def week_avg(self):
		week_ago = datetime.now() - timedelta(days=7)
		today = datetime.now()

		gid = self.id
		wa = Ratings.objects.get(Q(game=gid) & Q(updated_on=week_ago))
		week_average = wa.average_rating

		return week_average

	# Get all Average Ratings for a game
	def average(self):
		average = []

		gid = self.id

		filtered = Ratings.objects.filter(game_id=gid)
		for g in filtered:
			avg = g.average_rating
			average.append(avg)

		return average
	
	def geek_average(self):
		geek_average = []

		gid = self.id
		filtered = Ratings.objects.filter(game_id=gid)
		for g in filtered:
			avg = g.geek_rating
			geek_average.append(avg)

		return geek_average


	# Get current Average Rating
	def get_avg(self):
		today = datetime.now()
		gid = self.id
		game_rating = Ratings.objects.get(Q(game=gid) & Q(updated_on=today))
		average_rating = game_rating.average_rating
		
		return average_rating

	# Get Average Rating from yesterday
	def prev_avg(self):
		yesterday = datetime.now() - timedelta(days=1)
		gid = self.id

		prev = Ratings.objects.get(Q(game=gid) & Q(updated_on=yesterday))
		prev_rating = prev.average_rating

		return prev_rating

	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		if self.photo_link and not self.photo:
			img_temp = NamedTemporaryFile(delete=True)
			img_temp.write(urlopen(self.photo_link).read())
			img_temp.flush()
			self.photo.save(f"image_{self.slug}", File(img_temp))
		super(Game, self).save(*args, **kwargs)

	def get_absolute_url(self):
		return reverse('games', kwargs={'slug': self.slug})

class Ratings(models.Model):
	for_game = models.ForeignKey(Game, on_delete=models.CASCADE, name="game")
	voters = models.IntegerField(blank=True)
	average_rating = models.FloatField(blank=True)
	geek_rating = models.FloatField(blank=True)
	rank_overall = models.IntegerField(blank=True)
	strategy_rank = models.IntegerField(blank=True)
	customizable_rank = models.IntegerField(blank=True)
	thematic_rank = models.IntegerField(blank=True)
	abstract_rank = models.IntegerField(blank=True)
	family_rank = models.IntegerField(blank=True)
	children_rank = models.IntegerField(blank=True)
	party_rank = models.IntegerField(blank=True)
	wargame_rank = models.IntegerField(blank=True)
	updated_on = models.DateField(default=datetime.now)


	def __str__(self):
		return self.game.name
	
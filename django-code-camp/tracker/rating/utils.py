import requests
import lxml
from bs4 import BeautifulSoup

def get_rating(url):
	headers = {
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:85.0) Gecko/20100101 Firefox/85.0",
		"Accept-Language": "en-GB, en-US, q=0.9, en"
	}

	response = requests.get(url, headers=headers)

	soup = BeautifulSoup(response.text, "lxml")

	voters = soup.find('usersrated')
	average_rating =  soup.find('average')
	geek_rating =  soup.find('bayesaverage')
	rank_overall = soup.find('rank', {'name':"boardgame"})
	strategy_rank = soup.find('rank', {'name':'strategygames'})
	customizable_rank = soup.find('rank', {'name':'cgs'})
	thematic_rank = soup.find('rank', {'name':'thematic'})
	abstract_rank = soup.find('rank', {'name':'abstracts'})
	family_rank = soup.find('rank', {'name':'familygames'})
	children_rank = soup.find('rank', {'name':'childrensgames'})
	party_rank = soup.find('rank', {'name':'partygames'})
	wargame_rank = soup.find('rank', {'name':'wargames'})
	
	if voters: 
		voters = voters
	else: 
		voters = 0


	if average_rating: 
		average_rating = average_rating
	else: 
		average_rating = 0


	if geek_rating: 
		geek_rating = geek_rating
	else: 
		geek_rating = 0


	if rank_overall['value'] == "Not Ranked":
		rank_overall['value'] = 0
	elif rank_overall: 
		rank_overall = rank_overall
	else: 
		rank_overall = 0


	if strategy_rank: 
		strategy_rank = strategy_rank['value']
	else: 
		strategy_rank = 0


	if customizable_rank: 
		customizable_rank = customizable_rank['value']
	else: 
		customizable_rank = 0


	if thematic_rank: 
		thematic_rank = thematic_rank['value']
	else: 
		thematic_rank = 0


	if abstract_rank: 
		abstract_rank = abstract_rank['value']
	else: 
		abstract_rank = 0


	if family_rank: 
		family_rank = family_rank['value']
	else: 
		family_rank = 0


	if children_rank: 
		children_rank = children_rank['value']
	else: 
		children_rank = 0


	if party_rank: 
		party_rank = party_rank['value']
	else: 
		party_rank = 0

		
	if wargame_rank: 
		wargame_rank = wargame_rank['value']
	else: 
		wargame_rank = 0


	context = {
		'voters': voters,
		'average_rating': average_rating,
		'geek_rating': geek_rating,
		'rank_overall': rank_overall,
		'strategy_rank': strategy_rank,
		'customizable_rank': customizable_rank,
		'thematic_rank': thematic_rank,
		'abstract_rank': abstract_rank,
		'family_rank': family_rank,
		'children_rank': children_rank,
		'party_rank': party_rank,
		'wargame_rank': wargame_rank,
		
	}

	return context

def get_game(url):
	headers = {
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:85.0) Gecko/20100101 Firefox/85.0",
		"Accept-Language": "en-GB, en-US, q=0.9, en"
	}

	response = requests.get(url, headers=headers)

	soup = BeautifulSoup(response.text, "lxml")

	name = soup.find('name')
	photo = soup.find('image').getText()

	context = {
		'name': name['value'],
		'photo': photo,
	}

	return context
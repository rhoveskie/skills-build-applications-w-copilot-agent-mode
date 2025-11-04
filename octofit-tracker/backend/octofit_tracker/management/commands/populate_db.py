
from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.db import connection
from django.conf import settings
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        self.stdout.write('Deleting old data (dropping collections)...')
        client = MongoClient()
        db = client[settings.DATABASES['default']['NAME']]
        for coll in ['activity', 'leaderboard', 'workout', 'user', 'team']:
            db[coll].drop()

        self.stdout.write('Creating teams...')
        marvel = Team.objects.create(name='Marvel', description='Marvel superheroes')
        dc = Team.objects.create(name='DC', description='DC superheroes')

        self.stdout.write('Creating users...')
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
        ]

        self.stdout.write('Creating activities...')
        Activity.objects.create(user=users[0], type='Web Swinging', duration=30, date='2025-11-01')
        Activity.objects.create(user=users[1], type='Suit Training', duration=45, date='2025-11-02')
        Activity.objects.create(user=users[2], type='Lasso Practice', duration=60, date='2025-11-03')
        Activity.objects.create(user=users[3], type='Detective Work', duration=90, date='2025-11-04')

        self.stdout.write('Creating workouts...')
        w1 = Workout.objects.create(name='Super Strength', description='Strength workout for heroes')
        w2 = Workout.objects.create(name='Agility Training', description='Agility workout for heroes')
        w1.suggested_for.set([marvel, dc])
        w2.suggested_for.set([marvel])

        self.stdout.write('Creating leaderboards...')
        Leaderboard.objects.create(team=marvel, points=100)
        Leaderboard.objects.create(team=dc, points=80)

        self.stdout.write('Ensuring unique index on user email...')
        db['user'].create_index('email', unique=True)

        self.stdout.write(self.style.SUCCESS('Database populated with test data!'))

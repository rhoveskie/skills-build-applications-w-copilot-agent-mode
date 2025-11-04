from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelSmokeTest(TestCase):
    def test_team_create(self):
        t = Team.objects.create(name='Test Team')
        self.assertEqual(str(t), 'Test Team')
    def test_user_create(self):
        t = Team.objects.create(name='Test Team')
        u = User.objects.create(name='Test User', email='test@example.com', team=t)
        self.assertEqual(str(u), 'Test User')
    def test_activity_create(self):
        t = Team.objects.create(name='Test Team')
        u = User.objects.create(name='Test User', email='test@example.com', team=t)
        a = Activity.objects.create(user=u, type='Run', duration=10, date='2025-11-04')
        self.assertIn('Run', str(a))
    def test_workout_create(self):
        t = Team.objects.create(name='Test Team')
        w = Workout.objects.create(name='Test Workout')
        w.suggested_for.set([t])
        self.assertEqual(str(w), 'Test Workout')
    def test_leaderboard_create(self):
        t = Team.objects.create(name='Test Team')
        l = Leaderboard.objects.create(team=t, points=42)
        self.assertIn('Leaderboard', str(l))

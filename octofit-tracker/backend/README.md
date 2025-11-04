OctoFit Tracker — backend

Setup (from repository root):

```bash
python3 -m venv octofit-tracker/backend/venv
source octofit-tracker/backend/venv/bin/activate
pip install -r octofit-tracker/backend/requirements.txt
python octofit-tracker/backend/manage.py migrate
python octofit-tracker/backend/manage.py runserver 0.0.0.0:8000
```

Notes:
- The project is configured to use `djongo` with MongoDB by default in `settings.py`.
- Replace `SECRET_KEY` in `octofit-tracker/backend/octofit_tracker/settings.py` for production.

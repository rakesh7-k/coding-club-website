# CODE NEXUS (GeeksforGeeks Campus Club Prototype)

This workspace contains a frontend prototype (static HTML/CSS/JS) and a complete backend scaffold built with Django.

## 📦 Structure

The workspace is split into two main parts:

```
/ (repo root)
├─ index.html           # Static prototype landing page
├─ dashboard.html       # Static prototype dashboard page
├─ ... (other static HTML pages)
├─ styles.css           # Shared CSS for static prototype
├─ script.js            # Shared JS for static prototype
└─ backend/             # Full Django backend app
   ├─ manage.py
   ├─ requirements.txt
   ├─ codenexus/         # Django project settings + urls
   │  ├─ settings.py
   │  ├─ urls.py
   │  └─ wsgi.py
   └─ core/              # Main Django app
      ├─ models.py
      ├─ views.py
      ├─ templates/core/  # Django HTML templates
      ├─ static/core/     # Django static assets (CSS/JS)
      └─ migrations/
```

- **Static frontend (quick prototype)**: HTML/CSS/JS files live at the root.
- **Django backend**: under `backend/`, with models, templates, views, and admin.

## ▶️ Running the Django backend
See `backend/README.md` for setup and run instructions.

---

If you prefer to keep using the simple static HTML version, open `index.html` in your browser.

# GeeksforGeeks Firebase Campus Club Frontend

This repository is a static web app prototype with Firebase authentication, Firestore data storage, and in-browser UI for club management features.

## 📦 Project structure

```
/ (repo root)
├─ index.html         # Landing page
├─ login.html         # Login screen
├─ dashboard.html     # User dashboard
├─ guilds.html        # Club/guild management
├─ events.html        # Event listings
├─ leaderboard.html   # Leaderboard view
├─ profile.html       # User profile
├─ admin.html         # Admin panel
├─ script.js          # Main app logic
├─ firebase-operations.js # Firebase helpers (auth/db/functions)
├─ firebase-functions.js  # Cloud Functions client wrappers
├─ firebase-config.js     # Firebase config object
├─ styles.css         # Shared styles
├─ images/            # UI assets
├─ README-FIREBASE.md # Firebase setup instructions
├─ GOOGLE_OAUTH_SETUP.md # Google OAuth setup guide
└─ ...
```

- **Frontend**: plain HTML/CSS/JS SPA-style pages.
- **Firebase integration**: hosted in `firebase-config.js`, `firebase-operations.js`, and `firebase-functions.js`.

## 🔧 Setup

1. Copy `firebase-config.example.js` to `firebase-config.js` (if present), or replace placeholders with your Firebase project config values.
2. Follow `README-FIREBASE.md` (and `GOOGLE_OAUTH_SETUP.md`) to configure Firestore rules and OAuth.
3. Serve files locally (e.g., with `npx http-server` or `python -m http.server`).

## ▶️ Run

- Open `index.html` in a browser, or use a local static server for full Firebase URL behavior.
- Sign in via Google to access dashboard, events, and guild management.

## 🛠 Notes

- No Django backend is included in this repository.
- Backend logic is handled through Firebase and Firebase Cloud Functions.
- For Firebase functions deployment, use Firebase CLI (`firebase deploy --only functions`).


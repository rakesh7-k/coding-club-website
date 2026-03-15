# CODE NEXUS (GeeksforGeeks Campus Club Prototype)

This workspace contains a frontend prototype (static HTML/CSS/JS) with Firebase integration and a complete backend scaffold built with Django.

## 🚀 Firebase Setup

To connect all features to Firebase:

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project called "Code Nexus"
   - Enable Authentication, Firestore Database, and Storage

2. **Configure Authentication**:
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider

3. **Configure Firestore Database**:
   - Go to Firestore Database > Create database
   - Start in test mode (you can change rules later)

4. **Get Firebase Config**:
   - Go to Project settings > General > Your apps
   - Click "Add app" > Web app
   - Copy the config object and replace the placeholder in `firebase-config.js`

5. **Update Firebase Config**:
   - Open `firebase-config.js`
   - Replace the placeholder values with your Firebase project config

## 📦 Structure

The workspace is split into two main parts:

```
d:\gfg\
├─ index.html           # Static prototype landing page
├─ dashboard.html       # Static prototype dashboard page
├─ ... (other static HTML pages)
├─ styles.css           # Shared CSS for static prototype
├─ script.js            # Shared JS for static prototype
├─ firebase-config.js   # Firebase configuration
├─ firebase-functions.js # Firebase functions
└─ backend/             # Full Django backend app
   ├─ manage.py
   ├─ requirements.txt
   ├─ codenexus/         # Django project settings + urls
   │  ├─ settings.py
   │  ├─ urls.py
   │  ├─ wsgi.py
   └─ core/              # Main Django app
      ├─ models.py
      ├─ views.py
      ├─ templates/core/  # Django HTML templates
      ├─ static/core/     # Django static assets (CSS/JS)
      └─ migrations/
```

## 🔧 Features Connected to Firebase

- **Authentication**: User sign up/sign in
- **User Profiles**: Store user data in Firestore
- **Guilds**: Join/leave guilds, real-time member counts
- **Leaderboard**: Real-time ranking based on XP
- **Events**: Register for events
- **Battle System**: Record battle results
- **Resources**: Access learning resources

## ▶️ Running the Static Frontend

1. Set up Firebase as described above
2. Open any HTML file in your browser (e.g., `index.html`)
3. Sign up or sign in to access Firebase features

## ▶️ Running the Django backend
See `backend/README.md` for setup and run instructions.

---

If you prefer to keep using the simple static HTML version, open `index.html` in your browser.
# 🚀 Google OAuth Setup Guide for Code Nexus

## Problem: "I can't use Google account I have connected to Firebase"

This means Google OAuth provider needs to be properly configured in your Firebase project.

## ✅ Step-by-Step Setup:

### 1. **Enable Google Provider in Firebase Console**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `gfg-rit-1abf7`
3. Click **Authentication** in the left sidebar
4. Go to **Sign-in method** tab
5. Find **Google** in the provider list
6. Click on it to expand
7. **Toggle ON** the "Enable" switch
8. Click **Save**

### 2. **Configure OAuth Consent Screen**
1. In Firebase Console, go to **Authentication** → **Settings** (gear icon)
2. Click **Google** under "Authorized domains"
3. Add your domain (if deploying) or keep localhost for development
4. Go to [Google Cloud Console](https://console.cloud.google.com/)
5. Select your project
6. Go to **APIs & Services** → **OAuth consent screen**
7. Choose **External** user type
8. Fill in app information:
   - **App name**: Code Nexus
   - **User support email**: Your email
   - **Developer contact**: Your email
9. Click **Save and Continue**
10. On Scopes page, click **Save and Continue**
11. On Test users page, add your email as a test user
12. Click **Save and Continue**

### 3. **Get OAuth Client ID (if needed)**
Firebase usually handles this automatically, but if you need manual setup:
1. In Google Cloud Console → **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **OAuth client ID**
3. Choose **Web application**
4. Add authorized redirect URIs:
   - `https://gfg-rit-1abf7.firebaseapp.com/__/auth/handler`
   - `http://localhost:5000/__/auth/handler` (for local development)
5. Copy the Client ID and paste it in Firebase Console if prompted

### 4. **Test Google Login**
1. Open `login.html` in your browser
2. Click the **"Google"** button
3. A popup should appear asking you to select your Google account
4. Choose your account and grant permissions
5. You should be redirected to `dashboard.html`

## 🔧 **Troubleshooting:**

### **Popup Blocked Error:**
- Allow popups for your site in browser settings
- The code now falls back to redirect method if popup is blocked

### **"Invalid OAuth access token" Error:**
- Make sure OAuth consent screen is properly configured
- Add your email as a test user in Google Cloud Console

### **"Auth domain not authorized" Error:**
- Add your domain to authorized domains in Firebase Console
- For local development, make sure you're using `localhost` or `127.0.0.1`

### **Still Not Working:**
1. Check browser console for specific error messages
2. Verify Firebase config in `firebase-config.js` is correct
3. Make sure Firestore security rules allow user document creation

## 📱 **For GitHub OAuth (Optional):**

If you want GitHub login too:

1. Go to GitHub → **Settings** → **Developer settings** → **OAuth Apps**
2. Create new OAuth App:
   - **Homepage URL**: `https://gfg-rit-1abf7.firebaseapp.com`
   - **Authorization callback URL**: `https://gfg-rit-1abf7.firebaseapp.com/__/auth/handler`
3. Copy Client ID and Client Secret
4. In Firebase Console → **Authentication** → **Sign-in method** → **GitHub**
5. Paste the Client ID and Client Secret
6. Enable GitHub provider

## 🎯 **Current Status:**
- ✅ Email/password authentication: Working
- 🔄 Google OAuth: Needs Firebase Console setup
- 🔄 GitHub OAuth: Optional, needs both Firebase and GitHub setup

**Once you complete the Google OAuth setup in Firebase Console, the Google login button should work perfectly!**</content>
<parameter name="filePath">d:\gfg\GOOGLE_OAUTH_SETUP.md
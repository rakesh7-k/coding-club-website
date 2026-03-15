// Firebase Authentication and Database Functions

// Get auth and db from window (initialized in firebase-config.js)
const firebaseAuth = window.firebaseAuth;
const firebaseDb = window.firebaseDb;

// Authentication Functions
async function signUp(email, password, userData) {
  try {
    const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Create user profile in Firestore
    await firebaseDb.collection('users').doc(user.uid).set({
      ...userData,
      email: email,
      uid: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    });

    return { success: true, user: user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function signIn(email, password) {
  try {
    const userCredential = await firebaseAuth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Update last login
    await firebaseDb.collection('users').doc(user.uid).update({
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    });

    return { success: true, user: user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Google Sign In
async function signInWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    let result;
    try {
      // Try popup first
      result = await firebaseAuth.signInWithPopup(provider);
    } catch (popupError) {
      // If popup is blocked, try redirect
      if (popupError.code === 'auth/popup-blocked') {
        result = await firebaseAuth.signInWithRedirect(provider);
        return { success: true, redirect: true };
      } else {
        throw popupError;
      }
    }

    const user = result.user;

    // Check if user profile exists, if not create it
    const userDoc = await firebaseDb.collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      // Create new user profile
      await firebaseDb.collection('users').doc(user.uid).set({
        name: user.displayName || user.email.split('@')[0],
        handle: user.email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, ''),
        email: user.email,
        uid: user.uid,
        avatar: user.photoURL || '',
        level: 1,
        xp: 0,
        rank: 0,
        achievements: [],
        tags: [],
        isAdmin: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
        provider: 'google'
      });
    } else {
      // Update last login
      await firebaseDb.collection('users').doc(user.uid).update({
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    return { success: true, user: user };
  } catch (error) {
    console.error('Google sign-in error:', error);
    return { success: false, error: error.message };
  }
}

// GitHub Sign In
async function signInWithGitHub() {
  try {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user:email');
    provider.addScope('read:user');
    provider.setCustomParameters({
      allow_signup: 'true'
    });

    const result = await firebaseAuth.signInWithPopup(provider);
    const user = result.user;

    // Check if user profile exists, if not create it
    const userDoc = await firebaseDb.collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      await firebaseDb.collection('users').doc(user.uid).set({
        name: user.displayName || user.email?.split('@')[0] || 'GitHub User',
        handle: user.email?.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '') || user.uid.substring(0, 10),
        email: user.email || '',
        uid: user.uid,
        avatar: user.photoURL || '',
        level: 1,
        xp: 0,
        rank: 0,
        achievements: [],
        tags: [],
        isAdmin: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
        provider: 'github'
      });
    } else {
      await firebaseDb.collection('users').doc(user.uid).update({
        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

    return { success: true, user: user };
  } catch (error) {
    console.error('GitHub sign-in error:', error);
    return { success: false, error: error.message };
  }
}

async function signOut() {
  try {
    await firebaseAuth.signOut();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function onAuthStateChanged(callback) {
  firebaseAuth.onAuthStateChanged(callback);
}

// User Data Functions
async function getUserData(uid) {
  try {
    const docSnap = await firebaseDb.collection('users').doc(uid).get();
    if (docSnap.exists) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, error: 'User not found' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function updateUserData(uid, data) {
  try {
    await firebaseDb.collection('users').doc(uid).update(data);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Guilds Functions
async function getGuilds() {
  try {
    const querySnapshot = await firebaseDb.collection('guilds').get();
    const guilds = [];
    querySnapshot.forEach((doc) => {
      guilds.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: guilds };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function joinGuild(userId, guildId) {
  try {
    // Add user to guild members
    await firebaseDb.collection('guilds').doc(guildId).update({
      members: firebase.firestore.FieldValue.arrayUnion(userId)
    });

    // Update user's guild
    await firebaseDb.collection('users').doc(userId).update({
      guild: guildId
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Leaderboard Functions
async function getLeaderboard() {
  try {
    const q = firebaseDb.collection('users').orderBy('xp', 'desc').limit(50);
    const querySnapshot = await q.get();

    const leaderboard = [];
    querySnapshot.forEach((doc) => {
      leaderboard.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: leaderboard };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Events Functions
async function getEvents() {
  try {
    const querySnapshot = await firebaseDb.collection('events').orderBy('date').get();
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: events };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addEvent(eventData) {
  try {
    await firebaseDb.collection('events').add({
      ...eventData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function registerForEvent(userId, eventId) {
  try {
    await firebaseDb.collection('eventRegistrations').add({
      userId: userId,
      eventId: eventId,
      registeredAt: new Date()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Battle Functions
async function recordBattleResult(winnerId, loserId, battleData) {
  try {
    await firebaseDb.collection('battles').add({
      winnerId: winnerId,
      loserId: loserId,
      ...battleData,
      timestamp: new Date()
    });

    // Update user stats
    await firebaseDb.collection('users').doc(winnerId).update({
      battleWins: firebase.firestore.FieldValue.increment(1)
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Resources Functions
async function getResources() {
  try {
    const querySnapshot = await firebaseDb.collection('resources').get();
    const resources = [];
    querySnapshot.forEach((doc) => {
      resources.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: resources };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addResource(resourceData) {
  try {
    await firebaseDb.collection('resources').add({
      ...resourceData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Announcements Functions
async function getAnnouncements() {
  try {
    const querySnapshot = await firebaseDb.collection('announcements').orderBy('createdAt', 'desc').get();
    const announcements = [];
    querySnapshot.forEach((doc) => {
      announcements.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: announcements };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addAnnouncement(announcementData) {
  try {
    await firebaseDb.collection('announcements').add({
      ...announcementData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Achievements Functions
async function getAchievements() {
  try {
    const querySnapshot = await firebaseDb.collection('achievements').orderBy('createdAt', 'desc').limit(6).get();
    const achievements = [];
    querySnapshot.forEach((doc) => {
      achievements.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: achievements };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addAchievement(achievementData) {
  try {
    await firebaseDb.collection('achievements').add({
      ...achievementData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Projects Functions
async function getProjects() {
  try {
    const querySnapshot = await firebaseDb.collection('projects').orderBy('createdAt', 'desc').limit(6).get();
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: projects };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addProject(projectData) {
  try {
    await firebaseDb.collection('projects').add({
      ...projectData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Blog Functions
async function getBlogPosts() {
  try {
    const querySnapshot = await firebaseDb.collection('blogPosts').orderBy('createdAt', 'desc').limit(6).get();
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: posts };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addBlogPost(postData) {
  try {
    await firebaseDb.collection('blogPosts').add({
      ...postData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Doubts Functions
async function getDoubts() {
  try {
    const querySnapshot = await firebaseDb.collection('doubts').orderBy('createdAt', 'desc').limit(6).get();
    const doubts = [];
    querySnapshot.forEach((doc) => {
      doubts.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: doubts };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addDoubt(doubtData) {
  try {
    await firebaseDb.collection('doubts').add({
      ...doubtData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function answerDoubt(doubtId, answerData) {
  try {
    await firebaseDb.collection('doubts').doc(doubtId).update({
      answers: firebase.firestore.FieldValue.arrayUnion(answerData)
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Make functions globally available
window.FirebaseAuth = {
  signUp,
  signIn,
  signInWithGoogle,
  signInWithGitHub,
  signOut,
  onAuthStateChanged,
  getUserData,
  updateUserData,
  getGuilds,
  joinGuild,
  getLeaderboard,
  getEvents,
  addEvent,
  registerForEvent,
  recordBattleResult,
  getResources,
  addResource,
  getAnnouncements,
  addAnnouncement,
  getAchievements,
  addAchievement,
  getProjects,
  addProject,
  getBlogPosts,
  addBlogPost,
  getDoubts,
  addDoubt,
  answerDoubt
};

// Auth UI Helpers
window.AuthUI = {
  init: () => {
    // Listen for auth state changes
    FirebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        AuthUI.showAuthenticatedUI(user);
      } else {
        AuthUI.showUnauthenticatedUI();
      }
    });
  },

  showAuthenticatedUI: (user) => {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
      authButtons.innerHTML = `
        <span class="text-sm">Welcome, ${user.email}</span>
        <button onclick="AuthUI.signOut()" class="btn-secondary">Sign Out</button>
      `;
    }
  },

  showUnauthenticatedUI: () => {
    const authButtons = document.querySelector('.auth-buttons');
    if (authButtons) {
      authButtons.innerHTML = `
        <button onclick="AuthUI.showLoginModal()" class="btn-secondary">Sign In</button>
        <button onclick="AuthUI.showSignupModal()" class="btn-primary">Sign Up</button>
      `;
    }
  },

  showLoginModal: () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-surface p-6 rounded-lg w-96">
        <h2 class="text-xl font-bold mb-4">Sign In</h2>
        <input type="email" id="login-email" placeholder="Email" class="input w-full mb-3">
        <input type="password" id="login-password" placeholder="Password" class="input w-full mb-4">
        <div class="flex gap-2">
          <button onclick="AuthUI.login()" class="btn-primary flex-1">Sign In</button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn-secondary flex-1">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  showSignupModal: () => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-surface p-6 rounded-lg w-96">
        <h2 class="text-xl font-bold mb-4">Sign Up</h2>
        <input type="text" id="signup-name" placeholder="Name" class="input w-full mb-3">
        <input type="email" id="signup-email" placeholder="Email" class="input w-full mb-3">
        <input type="password" id="signup-password" placeholder="Password" class="input w-full mb-4">
        <div class="flex gap-2">
          <button onclick="AuthUI.signup()" class="btn-primary flex-1">Sign Up</button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn-secondary flex-1">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  login: async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const result = await FirebaseAuth.signIn(email, password);
    if (result.success) {
      document.querySelector('.fixed').remove();
      location.reload(); // Reload to load user data
    } else {
      alert('Login failed: ' + result.error);
    }
  },

  signup: async () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const result = await FirebaseAuth.signUp(email, password, {
      name: name,
      handle: name.toLowerCase().replace(/\s+/g, ''),
      level: 1,
      xp: 0,
      rank: 0,
      achievements: [],
      tags: [],
      isAdmin: false
    });
    if (result.success) {
      document.querySelector('.fixed').remove();
      location.reload(); // Reload to load user data
    } else {
      alert('Signup failed: ' + result.error);
    }
  },

  signOut: async () => {
    await FirebaseAuth.signOut();
    location.reload();
  }
};
// Firebase Configuration and Initialization
// This file initializes Firebase and exports the Firestore database instance

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyASHB6FjefErtFTnYg3DhwxKUmiuwPXe7s",
  authDomain: "gfg-rit-1abf7.firebaseapp.com",
  projectId: "gfg-rit-1abf7",
  storageBucket: "gfg-rit-1abf7.firebasestorage.app",
  messagingSenderId: "371036056926",
  appId: "1:371036056926:web:745d016345d8555d04b3cf",
  measurementId: "G-PJN1ES5W1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the database instance for use in other modules
export { db };
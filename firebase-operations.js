// Firebase Operations Module
// This file contains functions to interact with Firestore collections
// Collections are automatically created when data is first inserted

import { db } from './firebase-config.js';
import {
  collection,
  doc,
  addDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/**
 * Create a new user document in the 'users' collection
 * @param {Object} user - User data object
 * @param {string} user.uid - User ID
 * @param {string} user.name - User name
 * @param {string} user.email - User email
 * @param {string} user.handle - User handle
 * @param {string} [user.avatar] - User avatar URL
 * @param {number} [user.level=1] - User level
 * @param {number} [user.xp=0] - User XP
 * @param {number} [user.rank=0] - User rank
 * @param {Array} [user.achievements=[]] - User achievements
 * @param {Array} [user.tags=[]] - User tags
 * @param {boolean} [user.isAdmin=false] - Admin status
 */
export async function createUser(user) {
  try {
    await setDoc(doc(db, 'users', user.uid), {
      ...user,
      level: user.level || 1,
      xp: user.xp || 0,
      rank: user.rank || 0,
      achievements: user.achievements || [],
      tags: user.tags || [],
      isAdmin: user.isAdmin || false,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp()
    });
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Add a new announcement to the 'announcements' collection
 * @param {string} title - Announcement title
 * @param {string} description - Announcement description
 */
export async function addAnnouncement(title, description) {
  try {
    await addDoc(collection(db, 'announcements'), {
      title,
      description,
      createdAt: serverTimestamp()
    });
    console.log('Announcement added successfully');
  } catch (error) {
    console.error('Error adding announcement:', error);
    throw error;
  }
}

/**
 * Add a new event to the 'events' collection
 * @param {string} title - Event title
 * @param {string} description - Event description
 * @param {string|Date} date - Event date
 */
export async function addEvent(title, description, date) {
  try {
    await addDoc(collection(db, 'events'), {
      title,
      description,
      date: new Date(date),
      createdAt: serverTimestamp()
    });
    console.log('Event added successfully');
  } catch (error) {
    console.error('Error adding event:', error);
    throw error;
  }
}

/**
 * Add a new resource to the 'resources' collection
 * @param {string} title - Resource title
 * @param {string} description - Resource description
 * @param {Array} links - Array of link objects {title: string, url: string}
 */
export async function addResource(title, description, links) {
  try {
    await addDoc(collection(db, 'resources'), {
      title,
      description,
      links,
      createdAt: serverTimestamp()
    });
    console.log('Resource added successfully');
  } catch (error) {
    console.error('Error adding resource:', error);
    throw error;
  }
}

/**
 * Add a new achievement to the 'achievements' collection
 * @param {string} title - Achievement title
 * @param {string} description - Achievement description
 * @param {string} icon - Achievement icon (emoji or URL)
 */
export async function addAchievement(title, description, icon) {
  try {
    await addDoc(collection(db, 'achievements'), {
      title,
      description,
      icon,
      createdAt: serverTimestamp()
    });
    console.log('Achievement added successfully');
  } catch (error) {
    console.error('Error adding achievement:', error);
    throw error;
  }
}

/**
 * Add a new project to the 'projects' collection
 * @param {string} title - Project title
 * @param {string} description - Project description
 * @param {string} githubLink - GitHub repository link
 */
export async function addProject(title, description, githubLink) {
  try {
    await addDoc(collection(db, 'projects'), {
      title,
      description,
      githubLink,
      createdAt: serverTimestamp()
    });
    console.log('Project added successfully');
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
}

/**
 * Add a new blog post to the 'blogPosts' collection
 * @param {string} title - Blog post title
 * @param {string} content - Blog post content
 * @param {string} author - Author name
 */
export async function addBlogPost(title, content, author) {
  try {
    await addDoc(collection(db, 'blogPosts'), {
      title,
      content,
      author,
      createdAt: serverTimestamp()
    });
    console.log('Blog post added successfully');
  } catch (error) {
    console.error('Error adding blog post:', error);
    throw error;
  }
}

/**
 * Add a new doubt to the 'doubts' collection
 * @param {string} question - Doubt question
 * @param {string} userId - User ID who asked the doubt
 */
export async function addDoubt(question, userId) {
  try {
    await addDoc(collection(db, 'doubts'), {
      question,
      userId,
      answers: [], // Array to store answers
      createdAt: serverTimestamp()
    });
    console.log('Doubt added successfully');
  } catch (error) {
    console.error('Error adding doubt:', error);
    throw error;
  }
}

/**
 * Create a new guild in the 'guilds' collection
 * @param {string} name - Guild name
 * @param {string} description - Guild description
 */
export async function createGuild(name, description) {
  try {
    await addDoc(collection(db, 'guilds'), {
      name,
      description,
      members: [],
      createdAt: serverTimestamp()
    });
    console.log('Guild created successfully');
  } catch (error) {
    console.error('Error creating guild:', error);
    throw error;
  }
}

/**
 * Record a battle result in the 'battles' collection
 * @param {string} user1 - First user ID
 * @param {string} user2 - Second user ID
 * @param {string} winner - Winner user ID
 */
export async function recordBattle(user1, user2, winner) {
  try {
    await addDoc(collection(db, 'battles'), {
      user1,
      user2,
      winner,
      createdAt: serverTimestamp()
    });
    console.log('Battle recorded successfully');
  } catch (error) {
    console.error('Error recording battle:', error);
    throw error;
  }
}

// Example usage for testing
// Uncomment the lines below to test the functions

/*
import { createUser, addAnnouncement, addEvent, addResource, addAchievement, addProject, addBlogPost, addDoubt, createGuild, recordBattle } from './firebase-operations.js';

// Example: Create a user
await createUser({
  uid: 'user123',
  name: 'John Doe',
  email: 'john@example.com',
  handle: 'johndoe'
});

// Example: Add announcement
await addAnnouncement('New Hackathon', 'Join our upcoming hackathon!');

// Example: Add event
await addEvent('Coding Workshop', 'Learn advanced algorithms', '2026-03-20');

// Example: Add resource
await addResource('DSA Roadmap', 'Complete guide to data structures', [
  { title: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/data-structures/' }
]);

// Example: Add achievement
await addAchievement('First Problem Solved', 'Congratulations on solving your first problem!', '🏆');

// Example: Add project
await addProject('Todo App', 'A simple todo application', 'https://github.com/user/todo-app');

// Example: Add blog post
await addBlogPost('My Coding Journey', 'This is my story...', 'John Doe');

// Example: Add doubt
await addDoubt('How does recursion work?', 'user123');

// Example: Create guild
await createGuild('DSA Masters', 'For competitive programming enthusiasts');

// Example: Record battle
await recordBattle('user123', 'user456', 'user123');
*/
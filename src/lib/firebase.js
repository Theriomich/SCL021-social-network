// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
import { getFirestore } from  https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK4nEJBdxtHlVvaSviLxjqxpCs8kdnJBY",
  authDomain: "technology-red-social.firebaseapp.com",
  projectId: "technology-red-social",
  storageBucket: "technology-red-social.appspot.com",
  messagingSenderId: "420784754996",
  appId: "1:420784754996:web:745dbc5c51893af2e55561",
  measurementId: "G-R840DKR320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
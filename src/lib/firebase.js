// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDK4nEJBdxtHlVvaSviLxjqxpCs8kdnJBY',
  authDomain: 'technology-red-social.firebaseapp.com',
  projectId: 'technology-red-social',
  storageBucket: 'technology-red-social.appspot.com',
  messagingSenderId: '420784754996',
  appId: '1:420784754996:web:745dbc5c51893af2e55561',
  measurementId: 'G-R840DKR320',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const logOut = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#/welcome';
      // console.log(`bai bai`);
    })
    .catch((error) => {
      // console.log(error);
    });
};

export const observer = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.hash = '#/wall';
      const uid = user.uid;
      console.log(`bienvenida ${uid}`);
    } else if (!user) {
      if (window.location.hash !== '#/register') {
        logOut();
      }
    }
  });
};

export const userLogin = () => {
  const loginEmail = document.getElementById('emailLogin').value;
  const loginPassword = document.getElementById('passLogin').value;
  if (loginEmail === '' || loginPassword === '') {
    alert('email o contraseña no ingresados');
  } else {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        // const mail = userCredential.user.mail;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorCode + errorMessage;
      });
  }
};

export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    // getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log(user.displayName);
      // console.log('usuario creado con google');
      return `${user} + logged in with google + ${token}`;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // console.log(error);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log('usuario no creado');
      return errorMessage + errorCode + email + credential;
    });
};




import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-6283e.firebaseapp.com",
  projectId: "ai-interview-6283e",
  storageBucket: "ai-interview-6283e.firebasestorage.app",
  messagingSenderId: "251583092905",
  appId: "1:251583092905:web:6e938abf28b952e6c5f1b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider

export { auth, provider }
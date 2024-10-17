// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-9c4ac.firebaseapp.com",
  projectId: "mern-9c4ac",
  storageBucket: "mern-9c4ac.appspot.com",
  messagingSenderId: "1079676993059",
  appId: "1:1079676993059:web:be8f4a2440d06bbc9e7b96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
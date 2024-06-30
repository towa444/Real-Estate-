// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFYpKYXQ6EvwFfNy8mtBjqNSyOspFDUj0",
  authDomain: "real-estate-7a1d8.firebaseapp.com",
  projectId: "real-estate-7a1d8",
  storageBucket: "real-estate-7a1d8.appspot.com",
  messagingSenderId: "938516043125",
  appId: "1:938516043125:web:9b16a70899667c48a5af3c",
  measurementId: "G-2DYBLQ5MB8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Ydpu1d5l3JPwL3ddvjhZr5qdsWWhPCM",
  authDomain: "netflixgpt-f6131.firebaseapp.com",
  projectId: "netflixgpt-f6131",
  storageBucket: "netflixgpt-f6131.firebasestorage.app",
  messagingSenderId: "139795680718",
  appId: "1:139795680718:web:bfd745928da39fcbaa6f9f",
  measurementId: "G-V3NRQFMK1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
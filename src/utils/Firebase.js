// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMnlvqVMAwzjgo7QtaUS_VHPwiXVbAiig",
  authDomain: "netflixgpt-a3445.firebaseapp.com",
  projectId: "netflixgpt-a3445",
  storageBucket: "netflixgpt-a3445.firebasestorage.app",
  messagingSenderId: "889333466692",
  appId: "1:889333466692:web:a3fa4ec3d21a45dd5b9e11",
  measurementId: "G-M7X8YSYHS9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvB2gl11X-rJq6JbXIauszPw6fq3xJ_ys",
  authDomain: "movieweb-a3975.firebaseapp.com",
  projectId: "movieweb-a3975",
  storageBucket: "movieweb-a3975.appspot.com",
  messagingSenderId: "553688470636",
  appId: "1:553688470636:web:69b6ce07785dcfae327449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
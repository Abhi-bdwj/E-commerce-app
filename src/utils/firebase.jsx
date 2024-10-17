// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBvASXhM3XkND6kbKDgXWk-EcgyCenUeLQ",
  authDomain: "zue-e-commerce.firebaseapp.com",
  projectId: "zue-e-commerce",
  storageBucket: "zue-e-commerce.appspot.com",
  messagingSenderId: "742292141358",
  appId: "1:742292141358:web:46e860490080721176f6bf",
  measurementId: "G-9JHXWB9J29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

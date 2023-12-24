// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhsDZtsosc4WDq90nN2dq5b8Jk3PyMEZk",
  authDomain: "my-netflix-gpt-292a9.firebaseapp.com",
  projectId: "my-netflix-gpt-292a9",
  storageBucket: "my-netflix-gpt-292a9.appspot.com",
  messagingSenderId: "561701197573",
  appId: "1:561701197573:web:69bdd47abe44f9cd76096c",
  measurementId: "G-4FQ8WZSZBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
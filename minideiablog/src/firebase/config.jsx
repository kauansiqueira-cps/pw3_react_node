// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwE4CqDc3o-zGwOrSSJThxZVydcr9dPpk",
  authDomain: "miniblog-ck.firebaseapp.com",
  projectId: "miniblog-ck",
  storageBucket: "miniblog-ck.appspot.com",
  messagingSenderId: "156197365208",
  appId: "1:156197365208:web:69c26e999bac469bd6bead",
  measurementId: "G-B1GXQZWE9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
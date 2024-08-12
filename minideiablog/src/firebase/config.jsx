import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCwE4CqDc3o-zGwOrSSJThxZVydcr9dPpk",
  authDomain: "miniblog-ck.firebaseapp.com",
  projectId: "miniblog-ck",
  storageBucket: "miniblog-ck.appspot.com",
  messagingSenderId: "156197365208",
  appId: "1:156197365208:web:69c26e999bac469bd6bead",
  measurementId: "G-B1GXQZWE9D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
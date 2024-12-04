// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_wl3QTmsDK5L6DX-k07AilDvIuiQoq0k",
  authDomain: "myfirstwebapp-82576.firebaseapp.com",
  projectId: "myfirstwebapp-82576",
  storageBucket: "myfirstwebapp-82576.firebasestorage.app",
  messagingSenderId: "763934803577",
  appId: "1:763934803577:web:504e93fc46354d1508f6a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };

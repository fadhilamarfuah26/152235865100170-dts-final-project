// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRbwvEUXZXend0i-6oi2-2rY6pnXyasZc",
  authDomain: "dtsfinalproject-170.firebaseapp.com",
  projectId: "dtsfinalproject-170",
  storageBucket: "dtsfinalproject-170.appspot.com",
  messagingSenderId: "445415447425",
  appId: "1:445415447425:web:059682af18fe0aa2962680",
  measurementId: "G-Z7HNHMD7LF",
  databaseURL: "https://dtsfinalproject-170-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const db = getFirestore(app);


export {auth, database, db};
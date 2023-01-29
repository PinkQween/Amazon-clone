// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByE-gU2OGGYXU1B7ZyZ2dGFJqmDpGJrR4",
  authDomain: "fir-a9238.firebaseapp.com",
  databaseURL: "https://fir-a9238-default-rtdb.firebaseio.com",
  projectId: "fir-a9238",
  storageBucket: "fir-a9238.appspot.com",
  messagingSenderId: "921825957565",
  appId: "1:921825957565:web:2611c37cece73c049449d4",
  measurementId: "G-B415RFFLRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { db, auth };
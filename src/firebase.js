// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const db = {
  apiKey: "AIzaSyDwCUA4VJyrqA6ga4yLZUGAardnrH82a5g",
  authDomain: "react-node-93682.firebaseapp.com",
  projectId: "react-node-93682",
  storageBucket: "react-node-93682.appspot.com",
  messagingSenderId: "202402391681",
  appId: "1:202402391681:web:ddf0555e9313a4402d4f80",
  measurementId: "G-3CYMZME6KT"
};

// Initialize Firebase
const app = initializeApp(db);
const analytics = getAnalytics(app);

export default db;
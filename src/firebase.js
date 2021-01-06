import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCE6SF2ppm3b6VuAGu9sUXau3UxDQv7o7o",
  authDomain: "practica-dab31.firebaseapp.com",
  databaseURL: "https://practica-dab31.firebaseio.com",
  projectId: "practica-dab31",
  storageBucket: "practica-dab31.appspot.com",
  messagingSenderId: "202245402657",
  appId: "1:202245402657:web:003918e65924de874f3360",
  measurementId: "G-Y8EFG51CWF",
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

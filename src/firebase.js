import firebase from "firebase";
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyBJLOpEdvzcnu8t85U5PGCppZA_yAZCQaM",
  authDomain: "clone-1eefc.firebaseapp.com",
  projectId: "clone-1eefc",
  storageBucket: "clone-1eefc.appspot.com",
  messagingSenderId: "562201946249",
  appId: "1:562201946249:web:bedc0be1d479fcabf13e58",
  measurementId: "G-2LCYBTSD6C"
});

// Initialize Firebase

const auth = firebase.auth();
export { auth};
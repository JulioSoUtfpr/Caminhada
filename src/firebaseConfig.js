import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBER0CpePLvg4lG6IGN_mAQz_ofXGkGHbU",
  authDomain: "desenvolvimento-mobile-ddcb8.firebaseapp.com",
  databaseURL:
    "https://desenvolvimento-mobile-ddcb8-default-rtdb.firebaseio.com",
  projectId: "desenvolvimento-mobile-ddcb8",
  storageBucket: "desenvolvimento-mobile-ddcb8.appspot.com",
  messagingSenderId: "381149782957",
  appId: "1:381149782957:web:930b3ffb5763be481cf724",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBffeXjAkn4TcySFXSnPjqF2tuE78riFOo",
    authDomain: "hubbub-f2dcf.firebaseapp.com",
    databaseURL: "https://hubbub-f2dcf.firebaseio.com",
    projectId: "hubbub-f2dcf",
    storageBucket: "hubbub-f2dcf.appspot.com",
    messagingSenderId: "717632766842"
  };

firebase.initializeApp(config);

const db = firebase.database();
const storage = firebase.storage();

export {
  db, storage
};

import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyC07GhKoS9jPus2o5nJ-VmYeePpJmO9ohQ",
    authDomain: "booksanta1-b3afb.firebaseapp.com",
    projectId: "booksanta1-b3afb",
    storageBucket: "booksanta1-b3afb.appspot.com",
    messagingSenderId: "574934839956",
    appId: "1:574934839956:web:466643845e5e041550fa81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();

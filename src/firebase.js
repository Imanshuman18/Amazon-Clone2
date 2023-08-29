// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCVmwlKPzm8c3Q40GML_9KN3K2VZA-JbHg",
    authDomain: "clone-29086.firebaseapp.com",
    projectId: "clone-29086",
    storageBucket: "clone-29086.appspot.com",
    messagingSenderId: "39129101693",
    appId: "1:39129101693:web:9d8760686ab69293690814",
    measurementId: "G-KNN75BE0SF"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db,auth};
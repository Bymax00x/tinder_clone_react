import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEVh2n8pnb86v7KkID_ju31gxKnscVkUg",
    authDomain: "tinder-clone-e40b9.firebaseapp.com",
    databaseURL: "https://tinder-clone-e40b9.firebaseio.com",
    projectId: "tinder-clone-e40b9",
    storageBucket: "tinder-clone-e40b9.appspot.com",
    messagingSenderId: "665910523378",
    appId: "1:665910523378:web:ac7a1d56b2d365d085e76b",
    measurementId: "G-VSQGBB95DH"
};  
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();


export default database;
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyAOPdKRA-x0-I7lvm6c_0Ow9dVTuvQ0xd4",
    authDomain: "wulfric-db3c0.firebaseapp.com",
    projectId: "wulfric-db3c0",
    storageBucket: "wulfric-db3c0.appspot.com",
    messagingSenderId: "695583404289",
    appId: "1:695583404289:web:7ab343d873779384c2eb00",
    measurementId: "G-N30FT7TJJD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
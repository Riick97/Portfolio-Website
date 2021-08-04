import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";
import 'firebase/analytics'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
    apiKey: "AIzaSyDNheUPrZuyZc9WNOUkUnru3PXzsTC1vu4",
    authDomain: "ulric-ricardo.firebaseapp.com",
    projectId: "ulric-ricardo",
    storageBucket: "ulric-ricardo.appspot.com",
    messagingSenderId: "910805075194",
    appId: "1:910805075194:web:d984e64954a48d5dfa7543",
    measurementId: "G-3JTMPZE14M"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
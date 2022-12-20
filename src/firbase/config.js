import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWdy2cLH388j8-VhkUzFY5jRYeHMdvCVg",
    authDomain: "olx-clone-1668a.firebaseapp.com",
    projectId: "olx-clone-1668a",
    storageBucket: "olx-clone-1668a.appspot.com",
    messagingSenderId: "674244425857",
    appId: "1:674244425857:web:acd81a32d6dadbf74b3580",
    measurementId: "G-3BJ6MPCV2E"
};

export default  firebase.initializeApp(firebaseConfig)
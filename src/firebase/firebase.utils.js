import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlvKTbnuuCRUeBioyeAmJMna-ImTh5p2E",
    authDomain: "kim-clothing.firebaseapp.com",
    databaseURL: "https://kim-clothing.firebaseio.com",
    projectId: "kim-clothing",
    storageBucket: "kim-clothing.appspot.com",
    messagingSenderId: "162096425350",
    appId: "1:162096425350:web:e1cea45aa8dc5ad4472407",
    measurementId: "G-KGTZ0QXQL7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
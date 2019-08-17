import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZMvvCqiJdpJS4i8pJHY_jUIxfOgXin_g",
    authDomain: "crwn-db-79111.firebaseapp.com",
    databaseURL: "https://crwn-db-79111.firebaseio.com",
    projectId: "crwn-db-79111",
    storageBucket: "",
    messagingSenderId: "186354700192",
    appId: "1:186354700192:web:f48cd346fd22615b"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


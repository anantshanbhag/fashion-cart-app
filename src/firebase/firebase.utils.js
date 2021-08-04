import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCcSpqs3I1SOTG7jWhWt8jqMZjE9C2zsGE",
  authDomain: "crwn-db-f81e3.firebaseapp.com",
  projectId: "crwn-db-f81e3",
  storageBucket: "crwn-db-f81e3.appspot.com",
  messagingSenderId: "315359850925",
  appId: "1:315359850925:web:3e942f28c2902ca7163124"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from "firebase/app";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users')
  .doc('oq5vJM6nF0lP4OFj7BSc')
  .collection('cartItems')
  .doc('WncbZHRhsQPu4yxXc6L0');
firestore.doc('/users/oq5vJM6nF0lP4OFj7BSc/cartItems/WncbZHRhsQPu4yxXc6L0');
firestore.collection('/users/oq5vJM6nF0lP4OFj7BSc/cartItems');
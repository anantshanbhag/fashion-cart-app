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

/**
 * Creates user profile document from `userAuth`
 * @param {object} userAuth user authentication data after sign in with Google or with Email.
 * @param {object} additionalData additional data of user.
 * @returns `userRef` user profile document from firestore based on user id `uid` from `userAuth`.
 * @createdOn 6-Aug-2021
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }
    catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

/**
 * Store collections of static data array to firestore database.
 * @param {string} collectionKey Key of the collection.
 * @param {[object]} objectArray Static data array to be added to firestore database.
 * @returns A Promise resolved of committed batch of storing data to database  
 * @createdOn 30-Aug-2021
 */
export const addCollectionAndDocuments = async (collectionKey, objectArray) => {

  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectArray.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

/**
 * Convert collections of firestore database objects (Snapshot) to Hash Map.
 * @param {[object]} collections collections of firestore database objects (Snapshot).
 * @returns Hash Map object of collections.  
 * @createdOn 30-Aug-2021
 */
export const convertCollectionsSnapshotToMap = (collections) => {

  const collectionArray = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  // used reduce to create hash table object from array ==> with key = collection.title
  const collectionHashMap =
    collectionArray.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});

  return collectionHashMap;
}

/**
 * Unsubscribes the current user and gets that user.
 * @returns promise which unsubscribes user and resolves `userAuth`
 * @note `yield` should used to get the resolved value from promise. 
 * @createdOn 9-Sep-2021
 */
export const getCurrentUser = () => {

  return new Promise((resolve, reject) => {

    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);

  });
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
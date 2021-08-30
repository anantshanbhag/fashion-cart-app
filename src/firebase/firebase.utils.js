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
 *
 * @param collectionKey Key of the collection.
 * @param objectArray Static data array to be added to firestore database.
 * @return A Promise resolved of commited batch of storing data to database  
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
 *
 * @param collections collections of firestore database objects (Snapshot).
 * @return Hash Map object of collections.  
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
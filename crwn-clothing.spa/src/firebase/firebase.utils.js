import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBw1-HBYaWDdlZsImHeJPwnQhKAYmt7jXQ',
  authDomain: 'crwn-clothing-db-f4ddf.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-f4ddf.firebaseio.com',
  projectId: 'crwn-clothing-db-f4ddf',
  storageBucket: 'crwn-clothing-db-f4ddf.appspot.com',
  messagingSenderId: '56125051937',
  appId: '1:56125051937:web:4b38ab30d26ef521',
};

firebase.initializeApp(config);

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

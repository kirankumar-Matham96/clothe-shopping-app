import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAFBX9a89XqYZZ1BXOt-oKvc3SQh-GAqfY',
  authDomain: 'crwn-db-8ec1a.firebaseapp.com',
  projectId: 'crwn-db-8ec1a',
  storageBucket: 'crwn-db-8ec1a.appspot.com',
  messagingSenderId: '116556243978',
  appId: '1:116556243978:web:0f3f86a680072ab8aaabf3',
  measurementId: 'G-BHFYGV8C4X',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

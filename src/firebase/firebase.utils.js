// import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider,signInWithPopup}from 'firebase/auth'

const config ={
  apiKey: "AIzaSyBKFTDEytHSS1M1AGS0f3-vPoe5u-IfPpw",
  authDomain: "wears-db.firebaseapp.com",
  projectId: "wears-db",
  storageBucket: "wears-db.appspot.com",
  messagingSenderId: "974919472936",
  appId: "1:974919472936:web:3a6074877daa3f7fcc621d",
  measurementId: "G-SVVZC4TW9W"
};
initializeApp(config);

export const firestore= getFirestore();

const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const signInWithGoogle=() =>signInWithPopup(auth, provider)
.then((result)=>{
const credential=GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
const user =result.user;
}).catch((error)=>{
  const errorCode=error.code;
  const errorMessage=error.message
  const email =error.email;
  const credential=GoogleAuthProvider.credentialFromError(error);
});
// export default firebase;
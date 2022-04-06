// import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, setDoc,writeBatch, onSnapshot} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const config = {
  apiKey: "AIzaSyBKFTDEytHSS1M1AGS0f3-vPoe5u-IfPpw",
  authDomain: "wears-db.firebaseapp.com",
  projectId: "wears-db",
  storageBucket: "wears-db.appspot.com",
  messagingSenderId: "974919472936",
  appId: "1:974919472936:web:3a6074877daa3f7fcc621d",
  measurementId: "G-SVVZC4TW9W"
};
const app = initializeApp(config);

export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
export const auth = getAuth();

const users = collection(db, "users");
export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = doc(users, `${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((result) => {
    
     GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const user = result.user;
  }).catch((error) => {
    // const errorCode = error.code;
    console.log('error signing with pop up',error.message)

  });


  export const convertCollectionsSnapshotToMap=(collections)=>{
 
     const transformedCollection = collections.docs.map(doc=>{

      const {title,items} =doc.data();
      return {
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
      
    });
    return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()]=collection;
      return accumulator
    },{})
  }
       
      


















//adding collections and documents to our firebase firestore
//   export const addCollectionAndDocuments =async (collectionKey,ObjectsToAdd)=>{
//     const collectionRef = collection(db,collectionKey);  
//     const batch = writeBatch(db)
//     ObjectsToAdd.forEach(obj=>{
//       const newDocRef=doc(collectionRef, )
//       batch.set(newDocRef,obj)
     
//     })
//  return await batch.commit()
//   }

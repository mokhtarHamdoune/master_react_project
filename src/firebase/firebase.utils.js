import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAIveuXxxwtwHe_WBntaR30x3AyB1RaFpU",
    authDomain: "first-fdb.firebaseapp.com",
    databaseURL: "https://first-fdb.firebaseio.com",
    projectId: "first-fdb",
    storageBucket: "first-fdb.appspot.com",
    messagingSenderId: "912909598319",
    appId: "1:912909598319:web:83a0bd9416ebca089e979a",
    measurementId: "G-D6L8K07D6N"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const creatUserProfileDocument= async (userAuth,additionalData)=>{
  if(!userAuth) return;
  
  const userRef =firestore.doc(`users/${userAuth.uid}`)
  const snapshot= await userRef.get();
  console.log(snapshot);
  if(!snapshot.exists){
    try {
      const {displayName,email}=userAuth;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error when creating data ");
    }
  }
  return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export  const singInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;
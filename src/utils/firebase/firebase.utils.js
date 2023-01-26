import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq4tJ7-2xzM_QTcr5uj61kVo720aF-Bn4",
  authDomain: "crwn-clothing-db-da061.firebaseapp.com",
  projectId: "crwn-clothing-db-da061",
  storageBucket: "crwn-clothing-db-da061.appspot.com",
  messagingSenderId: "631154021242",
  appId: "1:631154021242:web:bcdd99f59ec0f3e9e3fcc3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
       const {displayName, email } = userAuth
       const createdAt = new Date()

       try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        } )
       }catch(error){
        console.log("error creating the user", error.message);
       }
    }

    return userDocRef
}
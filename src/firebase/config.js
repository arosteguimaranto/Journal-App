import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrbdqeWcZvnexwl_xIRx-ndKfa-So_zE4",
  authDomain: "react-cursos-4af8f.firebaseapp.com",
  projectId: "react-cursos-4af8f",
  storageBucket: "react-cursos-4af8f.appspot.com",
  messagingSenderId: "817658780535",
  appId: "1:817658780535:web:2091b13bdc7b60809f1f72"
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);
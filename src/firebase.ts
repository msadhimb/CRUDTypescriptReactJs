// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChXjI0jnFUT0nGbT3T91BhUZ1zshCuw0Q",
  authDomain: "crudtypecriptreactjs.firebaseapp.com",
  projectId: "crudtypecriptreactjs",
  storageBucket: "crudtypecriptreactjs.appspot.com",
  messagingSenderId: "1043780495172",
  appId: "1:1043780495172:web:b500b448bec8d6b9e99911",
  measurementId: "G-68E7H5XBEP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

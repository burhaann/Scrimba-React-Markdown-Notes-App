// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "react-scrimba-notes-84580.firebaseapp.com",
  projectId: "react-scrimba-notes-84580",
  storageBucket: "react-scrimba-notes-84580.appspot.com",
  messagingSenderId: "459970465980",
  appId: "1:459970465980:web:b7cbb42fc5b5d6a30680b9",
  measurementId: "G-P62GMDGETV",
};

console.log("firebaseConfig");
console.log(process.env.FIREBASE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");

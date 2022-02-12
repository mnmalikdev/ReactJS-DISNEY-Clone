// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSwb1jl_61we7GSVp5V5Xtl7ZTcOQQEcs",
  authDomain: "disneyplus-abe69.firebaseapp.com",
  projectId: "disneyplus-abe69",
  storageBucket: "disneyplus-abe69.appspot.com",
  messagingSenderId: "985644548345",
  appId: "1:985644548345:web:0ca856af20227732d2a228",
  measurementId: "G-2E0JP4LZ0G",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();
// const db = firebaseApp.firestore();
// const storage = firebase.storage();

export { auth, provider, db };
export default firebaseApp;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs9S6ai_tPDEgVkBQTpLDRdhERLb3ekAQ",
  authDomain: "ecommerce-react-coderhou-c73d9.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-c73d9",
  storageBucket: "ecommerce-react-coderhou-c73d9.appspot.com",
  messagingSenderId: "114843875180",
  appId: "1:114843875180:web:2a0b7550bed2c5e3856549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
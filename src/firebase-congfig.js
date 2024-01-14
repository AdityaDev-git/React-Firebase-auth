// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmqD4MjCP3MK1OyDsZPht43N2rmPlZCw0",
    authDomain: "react-firebase-auth-cf762.firebaseapp.com",
    projectId: "react-firebase-auth-cf762",
    storageBucket: "react-firebase-auth-cf762.appspot.com",
    messagingSenderId: "183190872603",
    appId: "1:183190872603:web:d9e60a9e2132371190cebe",
    measurementId: "G-V5GV8KMTJH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
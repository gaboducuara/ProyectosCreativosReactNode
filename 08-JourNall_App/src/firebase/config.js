// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyANNx_Mtr0IyNNwfaJB7e4F7HpddbCoNDk",
  authDomain: "react-fernandoh-journalapp.firebaseapp.com",
  projectId: "react-fernandoh-journalapp",
  storageBucket: "react-fernandoh-journalapp.appspot.com",
  messagingSenderId: "1063107070455",
  appId: "1:1063107070455:web:a8b06d014a269d2ea006f2"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//FUNCIONALIDADES DE AUTENTICACION en firebase
export const FirebaseAuth = getAuth( FirebaseApp );
// Configuracion de la base de datos en firebase
export const FirebaseDB = getFirestore( FirebaseApp )
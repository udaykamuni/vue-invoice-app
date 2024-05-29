// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu0oQyZPdWQ9k6L3yoRQet__YZjULbATs",
    authDomain: "invoice-app-519b6.firebaseapp.com",
    projectId: "invoice-app-519b6",
    storageBucket: "invoice-app-519b6.appspot.com",
    messagingSenderId: "1018920371661",
    appId: "1:1018920371661:web:8804edb151ebf60889b084"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(firebaseApp);

export { db };

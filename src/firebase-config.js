// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-oyX1vlGNc3w4hcjHfRRYbtR-vg2kAtM",
  authDomain: "rbac-a7ef3.firebaseapp.com",
  projectId: "rbac-a7ef3",
  storageBucket: "rbac-a7ef3.firebasestorage.app",
  messagingSenderId: "301308288347",
  appId: "1:301308288347:web:5262602be4c99796134e7e",
  measurementId: "G-2DJQPVF6N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
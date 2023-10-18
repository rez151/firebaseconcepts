// Import the functions you need from the SDKs you need
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCtSDQ0z3WiYsO_0j_fBhajUtNc6q889jI",
  authDomain: "concepts-6bef4.firebaseapp.com",
  databaseURL: "https://concepts-6bef4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "concepts-6bef4",
  storageBucket: "concepts-6bef4.appspot.com",
  messagingSenderId: "158164433760",
  appId: "1:158164433760:web:a4994239b14b7f7b69bc05",
  measurementId: "G-ZS1GPYEHXW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

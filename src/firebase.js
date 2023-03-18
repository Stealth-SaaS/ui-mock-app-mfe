// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy20ErCmJ6HjoUY86OToqQx7TjrQFzdmk",
  authDomain: "demoapp-39948.firebaseapp.com",
  projectId: "demoapp-39948",
  storageBucket: "demoapp-39948.appspot.com",
  messagingSenderId: "718054361734",
  appId: "1:718054361734:web:db87117bd4f5c223c9df07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj7Bs8b_NPTsuAwSEclrz6XmFdmdPEh5k",
  authDomain: "bingbong-b27cc.firebaseapp.com",
  projectId: "bingbong-b27cc",
  storageBucket: "bingbong-b27cc.appspot.com",
  messagingSenderId: "643154707230",
  appId: "1:643154707230:web:d258710740eb012eaa3f0f"
};

// Initialize Firebase
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
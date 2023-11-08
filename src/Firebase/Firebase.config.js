// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN, 
  projectId: import.meta.env.VITE_PROJECTID, 
  storageBucket: import.meta.env.VITE_STORAGEBUCKET, 
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID, 
  appId: import.meta.env.VITE_APPID,

  // apiKey: "AIzaSyCkkEoD-0TixoamrTx74c4VPRgq0p0l3dw",
  // authDomain: "sip-savor-restaurant.firebaseapp.com",
  // projectId: "sip-savor-restaurant",
  // storageBucket: "sip-savor-restaurant.appspot.com",
  // messagingSenderId: "210810667045",
  // appId: "1:210810667045:web:bafb79e9e9ab92aa7dffcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
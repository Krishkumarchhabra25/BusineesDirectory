// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ67fiX3lNCK_Nip8nI59mStUjPka1084",
  authDomain: "businessdirectory-96b20.firebaseapp.com",
  projectId: "businessdirectory-96b20",
  storageBucket: "businessdirectory-96b20.firebasestorage.app",
  messagingSenderId: "611484773395",
  appId: "1:611484773395:web:6e049feba9c8c6963363e6",
  measurementId: "G-SBV216P7N0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApPMqt-S6h90a3fMglks55QOu8iJp93Nw",
  authDomain: "hamburgers-2bba5.firebaseapp.com",
  projectId: "hamburgers-2bba5",
  storageBucket: "hamburgers-2bba5.appspot.com",
  messagingSenderId: "847956361610",
  appId: "1:847956361610:web:271b46f7ad6bc2b9b44873",
  measurementId: "G-SK685MMN3V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjC671J7lxzjV4JBjbpBGUzsDpKKH6DVA",
    authDomain: "foreman-cbd1a.firebaseapp.com",
    projectId: "foreman-cbd1a",
    storageBucket: "foreman-cbd1a.appspot.com",
    messagingSenderId: "197439938160",
    appId: "1:197439938160:web:04848d891008f80b9a5eb5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }
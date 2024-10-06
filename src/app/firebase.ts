// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyrMG6ik7QhufU89tHGxqqresu2TxkTUc",
  authDomain: "foreman-f3e68.firebaseapp.com",
  // authDomain: "auth.foremangh.com",
  projectId: "foreman-f3e68",
  storageBucket: "foreman-f3e68.appspot.com",
  messagingSenderId: "138274873973",
  appId: "1:138274873973:web:6d9db6716c2bfbd5ee4e3c",
  measurementId: "G-ZR27E4C091",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

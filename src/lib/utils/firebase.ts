/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-16 23:58:50
 * @LastEditTime: 2025-05-21 13:32:41
 */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYMf-WCBm4ycE_UgmiaYcTAY7uqzppJnM",
  authDomain: "deliciouseats-da24d.firebaseapp.com",
  databaseURL: "https://deliciouseats-da24d-default-rtdb.firebaseio.com",
  projectId: "deliciouseats-da24d",
  storageBucket: "deliciouseats-da24d.firebasestorage.app",
  messagingSenderId: "382594294436",
  appId: "1:382594294436:web:2517f1c233ddeb79647c31",
  measurementId: "G-HN6B5DNTDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider }; 
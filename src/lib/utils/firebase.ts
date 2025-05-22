/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-16 23:58:50
 * @LastEditTime: 2025-05-22 13:51:45
 */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from '../../../config/firebase';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider }; 
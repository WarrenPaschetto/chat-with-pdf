import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "chat-with-pdf-148f5.firebaseapp.com",
    projectId: "chat-with-pdf-148f5",
    storageBucket: "chat-with-pdf-148f5.appspot.com",
    messagingSenderId: "270128804620",
    appId: "1:270128804620:web:4ef419b2e503084da64f29",
    measurementId: "G-8MED4FM8P8"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};
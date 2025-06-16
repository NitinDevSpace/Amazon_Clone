// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB_N9lLk3aPdsSn1ZyNbkan8oH49s2mPc",
  authDomain: "e-commerce-website-233cc.firebaseapp.com",
  projectId: "e-commerce-website-233cc",
  storageBucket: "e-commerce-website-233cc.firebasestorage.app",
  messagingSenderId: "825699586165",
  appId: "1:825699586165:web:9debaf08d61390617ea83c",
  measurementId: "G-PKHY3BLGR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
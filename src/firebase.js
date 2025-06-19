// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Firebase API Key",
  authDomain: "Link to firebase Project",
  projectId: "e-commerce-website-233cc",
  storageBucket: "e-commerce-website-233cc.firebasestorage.app",
  messagingSenderId: "Some ID",
  appId: "1:384865:web:appID",
  measurementId: "G-dn84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

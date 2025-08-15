import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIskji0-4X3F_aSTQb3kkAxIs_xeubk2g",
  authDomain: "authform-b8098.firebaseapp.com",
  projectId: "authform-b8098",
  storageBucket: "authform-b8098.firebasestorage.app",
  messagingSenderId: "676276312667",
  appId: "1:676276312667:web:88b19ef24b742941affd7e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjWUWitP05pDlUi8xZ9okeVvYg-2R5tSk",
  authDomain: "dp-generator.firebaseapp.com",
  projectId: "dp-generator",
  storageBucket: "dp-generator.appspot.com",
  messagingSenderId: "181962588369",
  appId: "1:181962588369:web:d915e4b2108c3d2a0c05f0",
  measurementId: "G-TGYW4QXX1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const firebase = getAuth(app);
export const provider = new GoogleAuthProvider();

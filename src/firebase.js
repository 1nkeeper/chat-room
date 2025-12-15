import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-QtBTwLz_3-6YWGZokxJ_dud4ZxdSDZo",
  authDomain: "chatroom-3e5e7.firebaseapp.com",
  projectId: "chatroom-3e5e7",
  storageBucket: "chatroom-3e5e7.firebasestorage.app",
  messagingSenderId: "1049888073676",
  appId: "1:1049888073676:web:98170a1f69f13d91f71f69"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Dışarıya aç
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
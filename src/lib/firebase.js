import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatainew-149a2.firebaseapp.com",
  projectId: "chatainew-149a2",
  storageBucket: "chatainew-149a2.appspot.com",
  messagingSenderId: "333977726256",
  appId: "1:333977726256:web:533581987b1fdaeb34ecf5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByYWOVctdxK3R-BnIz68a5ToG37qNm3tI",
  authDomain: "tibia-analyser.firebaseapp.com",
  projectId: "tibia-analyser",
  storageBucket: "tibia-analyser.firebasestorage.app",
  messagingSenderId: "99465550010",
  appId: "1:99465550010:web:77f2d4561f1ed059cc8a83",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

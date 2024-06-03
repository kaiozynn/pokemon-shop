// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHoae_SOeppgcijRC5S5FvQnKBuPez8Xg",
  authDomain: "pokemon-shop-29e7b.firebaseapp.com",
  projectId: "pokemon-shop-29e7b",
  storageBucket: "pokemon-shop-29e7b.appspot.com",
  messagingSenderId: "821258623410",
  appId: "1:821258623410:web:1903563a7663df0a3d2cab",
  measurementId: "G-HJT6NQY8Z3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

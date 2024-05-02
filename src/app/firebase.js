import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfoFbEjqpaT20lhF7IjahJPpdldXVSIc0",
  authDomain: "hasangoatclub-f08e8.firebaseapp.com",
  databaseURL: "https://hasangoatclub-f08e8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hasangoatclub-f08e8",
  storageBucket: "hasangoatclub-f08e8.appspot.com",
  messagingSenderId: "487141998126",
  appId: "1:487141998126:web:948f2f7f321af1ae7a29bf",
  measurementId: "G-T3DTFDX8D9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const storage = getStorage(app);

export {db, storage};

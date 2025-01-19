import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhI3qhUj_tHCBt4qx0CBxiv9SddQ3Pe1A",
  authDomain: "blog-5ff46.firebaseapp.com",
  projectId: "blog-5ff46",
  storageBucket: "blog-5ff46.firebasestorage.app",
  messagingSenderId: "806617778830",
  appId: "1:806617778830:web:eab590b750e871888a97df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

// Initialize Firebase
const initializeFirebaseAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebaseAuth;
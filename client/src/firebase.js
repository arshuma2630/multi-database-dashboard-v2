import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWXsG7bEaHOQFPxbUZBi6qqvnSQ4Fy11o",
  authDomain: "ai-automation-dashboard.firebaseapp.com",
  projectId: "ai-automation-dashboard",
  storageBucket: "ai-automation-dashboard.firebasestorage.app",
  messagingSenderId: "968283070630",
  appId: "1:968283070630:web:15dedb0ccef6be01241467"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
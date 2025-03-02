// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const VITE_FIREBASE_APIKEY = import.meta.env.VITE_FIREBASE_APIKEY;
const VITE_FIREBASE_AUTHDOMAIN = import.meta.env.VITE_FIREBASE_AUTHDOMAIN;
const VITE_FIREBASE_PROJECTID = import.meta.env.VITE_FIREBASE_PROJECTID;
const VITE_FIREBASE_STORAGEBUCKET = import.meta.env.VITE_FIREBASE_STORAGEBUCKET;
const VITE_FIREBASE_MESSAGINGSENDERID = import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID;
const VITE_FIREBASE_APPID = import.meta.env.VITE_FIREBASE_APPID;
const VITE_FIREBASE_MEASUREMENTID = import.meta.env.VITE_FIREBASE_MEASUREMENTID;


const firebaseConfig = {
  apiKey: VITE_FIREBASE_APIKEY,
  authDomain: VITE_FIREBASE_AUTHDOMAIN,
  projectId: VITE_FIREBASE_PROJECTID,
  storageBucket: VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
  appId: VITE_FIREBASE_APPID,
  measurementId: VITE_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Sign in Anonymously
const signInAnonymouslyUser = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    console.log("Anonymous User ID:", userCredential.user.uid);
  } catch (error) {
    console.error("Anonymous sign-in failed:", error);
  }
};


export default app;
export { auth , signInAnonymouslyUser };
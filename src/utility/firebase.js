// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtiPRgRPufbR6IxUWuSJXDbVu7hs1Q71E",
  authDomain: "spotify-song-g.firebaseapp.com",
  projectId: "spotify-song-g",
  storageBucket: "spotify-song-g.firebasestorage.app",
  messagingSenderId: "520728202893",
  appId: "1:520728202893:web:d022d8b1ed6bfc96ae1cc4",
  measurementId: "G-PMWZYE5NLD"
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
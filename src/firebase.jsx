import { initializeApp } from "firebase";
import { getAnalytics } from "firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBHwyB0tcdzHCNiMed58BvM0uEy0C7EP9w",
  authDomain: "auth-a2550.firebaseapp.com",
  projectId: "auth-a2550",
  storageBucket: "auth-a2550.appspot.com",
  messagingSenderId: "82654990904",
  appId: "1:82654990904:web:4cc58912923d1d5feccccd",
  measurementId: "G-G960WPR9H4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
        alert(error);
    });
};
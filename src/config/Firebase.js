import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCf5WhYfTDPT5rX4c20OQJufyi-qTqc9rA",
  authDomain: "owlkidomer.firebaseapp.com",
  databaseURL: "https://owlkidomer-default-rtdb.firebaseio.com",
  projectId: "owlkidomer",
  storageBucket: "owlkidomer.appspot.com",
  messagingSenderId: "654682833530",
  appId: "1:654682833530:web:908d036179b8039490f1c3",
  measurementId: "G-L0TLS8BGKX"
   
};

initializeApp(firebaseConfig)

const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };
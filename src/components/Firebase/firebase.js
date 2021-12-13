import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVkpWiREVqbzxLGa51hCGr8lFpW5xe25U",
  authDomain: "book-square.firebaseapp.com",
  projectId: "book-square",
  storageBucket: "book-square.appspot.com",
  messagingSenderId: "877142123030",
  appId: "1:877142123030:web:00d7bd03d2afb6aae2cb37",
  measurementId: "G-T1HLNXSXQY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//Returns connection to BD
export default function getFirestore() {
    return firebase.firestore(app);
}
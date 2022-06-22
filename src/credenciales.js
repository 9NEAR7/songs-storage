// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3VNjj6j6fcUlvk3_bRcv9BoeLlwLrUg",
  authDomain: "estorage-firestore-songs.firebaseapp.com",
  projectId: "estorage-firestore-songs",
  storageBucket: "estorage-firestore-songs.appspot.com",
  messagingSenderId: "811358575153",
  appId: "1:811358575153:web:ab6e4732d0b211ac8dd310"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDSuvqg1ePoYBQSdJ0sghjKTePXb34BYtI",
  authDomain: "clone-67d70.firebaseapp.com",
  projectId: "clone-67d70",
  storageBucket: "clone-67d70.appspot.com",
  messagingSenderId: "288597700857",
  appId: "1:288597700857:web:8b9abaceebdc02c7eeb228",
  measurementId: "G-DNNSRW5QVC",
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth, db };

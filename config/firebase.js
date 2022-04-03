import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxyk4AVdQGessn5M52XDG0E_gjXG52fPM",
  authDomain: "mindcaretfg.firebaseapp.com",
  databaseURL: "https://mindcaretfg-default-rtdb.firebaseio.com",
  projectId: "mindcaretfg",
  storageBucket: "mindcaretfg.appspot.com",
  messagingSenderId: "578300871737",
  appId: "1:578300871737:web:ceb286f872583e8229f9e8"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}
export const auth = Firebase.auth();
export const db = Firebase.firestore();

export default Firebase;

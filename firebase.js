// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxyk4AVdQGessn5M52XDG0E_gjXG52fPM",
    authDomain: "mindcaretfg.firebaseapp.com",
    projectId: "mindcaretfg",
    storageBucket: "mindcaretfg.appspot.com",
    messagingSenderId: "578300871737",
    appId: "1:578300871737:web:ceb286f872583e8229f9e8"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const auth = firebase.auth();
export { auth };
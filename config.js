import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
import "firebase/compat/firestore";
export const firebaseConfig = {

    apiKey: "AIzaSyAms5OHRzpnhPmmKZMIUd-kj9wCJElRjl0",

  authDomain: "test-3dfcc.firebaseapp.com",

  projectId: "test-3dfcc",

  storageBucket: "test-3dfcc.appspot.com",

  messagingSenderId: "354773688557",

  appId: "1:354773688557:web:bebaed1b3ae2e244d9ace4",

  measurementId: "G-EK2LER1T7C"

};
// Then you can then use the old interface, with version 9:
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
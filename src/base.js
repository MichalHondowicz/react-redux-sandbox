import Rebase from "re-base";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwz5DJFWf1gEXXtrEPA2vTojbTt8IeduA",
  authDomain: "michon-bookstore.firebaseapp.com",
  databaseURL: "https://michon-bookstore.firebaseio.com",
  projectId: "michon-bookstore",
  storageBucket: "michon-bookstore.appspot.com",
  messagingSenderId: "919534499718",
  appId: "1:919534499718:web:06b9b8583a1260f0"
};

const app = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(app.database());

export { base, app };

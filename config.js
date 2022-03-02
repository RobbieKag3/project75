import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyApJi0KvSFFvztu3WHhosMYPNJ5VvP148o",
  authDomain: "barcodescanner-48db5.firebaseapp.com",
  projectId: "barcodescanner-48db5",
  storageBucket: "barcodescanner-48db5.appspot.com",
  messagingSenderId: "29516722249",
  appId: "1:29516722249:web:e127563dc24a587d21cf98"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

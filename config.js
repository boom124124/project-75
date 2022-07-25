import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAkUbKoOdrpOd_vWWkwuXeo4LqQXizmpiI",
  authDomain: "pro-71-4ec34.firebaseapp.com",
  projectId: "pro-71-4ec34",
  storageBucket: "pro-71-4ec34.appspot.com",
  messagingSenderId: "432372188071",
  appId: "1:432372188071:web:c13294eca7b7211495ac82"  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

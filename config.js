import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDrpWQii0BPhNfefwVQSC0r1L7peVgYnWo",
  authDomain: "e-ride-app-2e781.firebaseapp.com",
  projectId: "e-ride-app-2e781",
  storageBucket: "e-ride-app-2e781.appspot.com",
  messagingSenderId: "949718738381",
  appId: "1:949718738381:web:ebfbc9c7cb1aa415375084"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

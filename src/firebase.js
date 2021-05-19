import firebase from "firebase";
//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC_x6uR9P5baUzO2-JnGipecghj3wo39TQ",
    authDomain: "movie-app-8f3c5.firebaseapp.com",
    projectId: "movie-app-8f3c5",
    storageBucket: "movie-app-8f3c5.appspot.com",
    messagingSenderId: "737856086008",
    appId: "1:737856086008:web:4b5f76ed88bc8cb46a400d",
    measurementId: "G-9DFVCTEL3V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

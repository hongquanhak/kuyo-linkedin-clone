import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDPCOUkCefUFqR2aS8FmpapPQJTXTE8mTU",
  authDomain: "kuyo-linkedin-clone.firebaseapp.com",
  projectId: "kuyo-linkedin-clone",
  storageBucket: "kuyo-linkedin-clone.appspot.com",
  messagingSenderId: "995214291053",
  appId: "1:995214291053:web:f687424df7b6ce3a4bcf64"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
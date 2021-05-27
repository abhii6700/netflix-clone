import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsvmO8LJXfM8WmWeV4eblAUqNsBpXKq2A",
    authDomain: "netflix-clone-f120d.firebaseapp.com",
    projectId: "netflix-clone-f120d",
    storageBucket: "netflix-clone-f120d.appspot.com",
    messagingSenderId: "100863470420",
    appId: "1:100863470420:web:b99b7bd717175b167c76c1",
    measurementId: "G-67LG4YGXN7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()

  export {auth}
  export default db;
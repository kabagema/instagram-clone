import firebase from "firebase"

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyDQEmI4VqdBuRHXTNMkLqpW9e_-QTV4EaQ",
    authDomain: "instagram-clone-b58be.firebaseapp.com",
    projectId: "instagram-clone-b58be",
    storageBucket: "instagram-clone-b58be.appspot.com",
    messagingSenderId: "448100785868",
    appId: "1:448100785868:web:8810e110e1808cb0456c69"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};

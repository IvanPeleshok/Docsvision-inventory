import firebase from "firebase"

const config = {
  apiKey: "AIzaSyD6DnGbVfdJlDJ_pEOUfDfTDJrA8j3lIs8",
  authDomain: "dv-inventory.firebaseapp.com",
  databaseURL: "https://dv-inventory.firebaseio.com",
  projectId: "dv-inventory",
  storageBucket: "dv-inventory.appspot.com",
  messagingSenderId: "130062240176",
  appId: "1:130062240176:web:ecbca5d29b37d25c6cee75",
}

firebase.initializeApp(config)

export default firebase

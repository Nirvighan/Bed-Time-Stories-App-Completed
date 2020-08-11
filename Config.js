import firebase from 'firebase'
require("@firebase/firestore")


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDscMYqS14k6hG9x6fnZ-g3ppoXvGxBbr8",
    authDomain: "bed-time-stories-app.firebaseapp.com",
    databaseURL: "https://bed-time-stories-app.firebaseio.com",
    projectId: "bed-time-stories-app",
    storageBucket: "bed-time-stories-app.appspot.com",
    messagingSenderId: "922049552501",
    appId: "1:922049552501:web:b12346f652e680b921983c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
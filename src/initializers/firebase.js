import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA_bma-nFU3bAI7O2m8NMr-s0oBgn6JFSU",
    authDomain: "app-react-868ea.firebaseapp.com",
    databaseURL: "https://app-react-868ea.firebaseio.com",
    projectId: "app-react-868ea",
    storageBucket: "app-react-868ea.appspot.com",
    messagingSenderId: "244151399137"
  };
  firebase.initializeApp(config);

export default firebase;


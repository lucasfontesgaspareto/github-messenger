import firebase from 'firebase/app'
import 'firebase/auth'

export default () => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCpQ9-70bVXsv_u8Q-QIfxlBaetI67cqbQ",
    authDomain: "github-messenger.firebaseapp.com",
    databaseURL: "https://github-messenger.firebaseio.com",
    projectId: "github-messenger",
    storageBucket: "github-messenger.appspot.com",
    messagingSenderId: "485390232743"
  };
  firebase.initializeApp(config);
}
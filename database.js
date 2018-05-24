import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6tqMKpYR-dtKdnm_X89nawaTvBsUR4Yg",
    authDomain: "policenoteappx1.firebaseapp.com",
    databaseURL: "https://policenoteappx1.firebaseio.com",
    projectId: "policenoteappx1",
    storageBucket: "policenoteappx1.appspot.com",
    messagingSenderId: "941856454503"
  };
  firebase.initializeApp(config);
  

 export const rootRef = firebase.database();
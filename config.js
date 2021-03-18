import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDbiWCit7XRVKJIpUD7tSyRKXEmWRvB5GA",
    authDomain: "barterapp-d1b4b.firebaseapp.com",
    projectId: "barterapp-d1b4b",
    storageBucket: "barterapp-d1b4b.appspot.com",
    messagingSenderId: "205662274945",
    appId: "1:205662274945:web:344b51d98f1dd6f9dcd480"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA6UYiZ2tKTGYG3pUoYh4BdBcKbjwSkhvw",
    authDomain: "animelist-c931d.firebaseapp.com",
    projectId: "animelist-c931d",
    storageBucket: "animelist-c931d.appspot.com",
    messagingSenderId: "526822790946",
    appId: "1:526822790946:web:2d5196f3fbcf12d680377b"
  };

  let app: firebase.app.App;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.apps[0];
}

export const ANIME__COLLECTION = app!.firestore().collection('yoPuesQuienMas');
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAlPfld6LmkmtPwHCFr_j-kV0VUNvxyZk4",
  authDomain: "vue-chat-app-891e6.firebaseapp.com",
  databaseURL: "https://vue-chat-app-891e6.firebaseio.com",
  projectId: "vue-chat-app-891e6",
  storageBucket: "vue-chat-app-891e6.appspot.com",
  messagingSenderId: "737940983307",
  appId: "1:737940983307:web:537421a850e1a661ad410e"
};

firebase.initializeApp(config);
export default firebase;
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAlPfld6LmkmtPwHCFr_j-kV0VUNvxyZk4",
  authDomain: "vue-chat-app-891e6.firebaseapp.com",
  databaseURL: "https://vue-chat-app-891e6.firebaseio.com",
  projectId: "vue-chat-app-891e6",
  storageBucket: "gs://vue-chat-app-891e6.appspot.com/"
};

firebase.initializeApp(config);

export default firebase;

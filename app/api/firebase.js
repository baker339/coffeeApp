import * as firebase from "firebase";

//initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyCcjze3CysZGb8E_y5UGyGAaZ1-DvoLhWw",
  authDomain: "coffeeapp-2e602.firebaseapp.com",
  databaseURL: "https://coffeeapp-2e602.firebaseio.com",
  projectId: "coffeeapp-2e602",
  storageBucket: "coffeeapp-2e602.appspot.com",
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;

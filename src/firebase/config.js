import * as firebase from "firebase/app"
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJOR4SO-GyKU-r0IkNkVVTiqcEbKNNzY0",
  authDomain: "starbook-gallery.firebaseapp.com",
  projectId: "starbook-gallery",
  storageBucket: "starbook-gallery.appspot.com",
  messagingSenderId: "557395020301",
  appId: "1:557395020301:web:e7c11577396647e9d5e344",
  measurementId: "G-GVW27G76H8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore};
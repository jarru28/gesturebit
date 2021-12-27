import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBEukDw2D1ifR1wSf1ocKAp2dR0rvKk9eY",
    authDomain: "gesturebit.firebaseapp.com",
    projectId: "gesturebit",
    storageBucket: "gesturebit.appspot.com",
    messagingSenderId: "896970797852",
    appId: "1:896970797852:web:005910d33383b06b7000d9"
  };
  
  // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyAODtY1NMSHzySLLKRjpN7T421SV0I7GRY",
    authDomain: "pullapp-eeb7f.firebaseapp.com",
    databaseURL: "https://pullapp-eeb7f.firebaseio.com",
    projectId: "pullapp-eeb7f",
    storageBucket: "pullapp-eeb7f.appspot.com",
    messagingSenderId: "685891233767",
    appId: "1:685891233767:web:ba3524666adc208c5fbf42",
    measurementId: "G-HSL67MSMXZ"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();
export const db= firebase.firestore()
export const storage = firebase.storage();
export default firebase;

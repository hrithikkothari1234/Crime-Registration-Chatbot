import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAke41zbOzUOpRmHFzz_LCgjah3f6XSd-Y",
    authDomain: "chatbot-700f4.firebaseapp.com",
    databaseURL: "https://chatbot-700f4.firebaseio.com",
    projectId: "chatbot-700f4",
    storageBucket: "chatbot-700f4.appspot.com",
    messagingSenderId: "839358854890",
    appId: "1:839358854890:web:efc10f339b0b488a164993",
    measurementId: "G-7CMTMEZ4RV"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase

export const db = firebase.firestore();

export const cases_registered = () =>{
  return db.collection('Cases').get()
}




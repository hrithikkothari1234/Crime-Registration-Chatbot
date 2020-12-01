import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'


const firebaseConfig = {
    //api keys here
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()
export default firebase

export const db = firebase.firestore();

export const cases_registered = async() =>{
  const data = []
  const events = await db.collection('Cases').get()
    .then(querySnapshot => {
      querySnapshot.docs.map(doc => {
        data.push(doc.data())
      });
    });
  return data
}

export const DeleteCase = (Id) =>{
  return db.collection('Cases').doc(Id).delete()
}




import firebase, { db } from '../firebase/firebase';
export const LOGIN_USER = "LOGIN_USER";
export const  SIGN_OUT_USER = "SIGN_OUT_USER";

export const Login = async (creds) =>{
  try {
    const x = firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password);
    console.log(x)
  } catch (err) {
    console.log(err)
  }
}
  export const SignOut = () => {
    return firebase.auth().signOut();
  }
  

  
/*
  const result = await firebase
  .auth()
  .createUserWithEmailAndPassword(creds.email, creds.password);
  await result.user.updateProfile({
    displayName: "Team",
  });
  return await setUserProfileData(result.user);
}

export async function registerInFirebase(creds) {
  try {
    const result = await firebase
    .auth()
    .createUserWithEmailAndPassword(creds.email, creds.password);
    await result.user.updateProfile({
      displayName: creds.displayName,
    });
    return await setUserProfileData(result.user);
  } catch (error) {
    throw error;
  }
}
export function setUserProfileData(user) {
  return db
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}
*/

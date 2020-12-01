import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";


const RootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
}) 

export default RootReducer
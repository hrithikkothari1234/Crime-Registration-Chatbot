import React from 'react';
import ReactDOM from 'react-dom';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app'
import { createFirestoreInstance } from 'redux-firestore';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app/layout/App';
import { configure } from './app/configure/store/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root')

const store = configure()

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile:true,
}

const rrfProps={
  firebase,
  config:rrfConfig,
  dispatch:store.dispatch,
  createFirestoreInstance
}

let render = () => {
  ReactDOM.render(
    <Provider  store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
    ,root);

} 

if(module.hot){
  module.hot.accept("./app/layout/App",()=>{setTimeout(render)})
}

render();



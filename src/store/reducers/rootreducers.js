import authReducer from './authreducer.js'
import pullReducer from './pullreducer.js'
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer=combineReducers({
  auth:authReducer,
  pull:pullReducer,
  firestore:firestoreReducer,
  firebase:firebaseReducer
})

export default rootReducer;

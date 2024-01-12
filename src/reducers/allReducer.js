import authReducer from "./auth";
import fetchReducer from "./fetch";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CLEAR_ALL_REDUCERS_DATA ,ONLOAD,LOGIN_SUCCESS,LOGOUT} from "../actions/type";
import languageReducer from "./languages";
import fetch from "./fetch";
import workTypeReducer from "./worktype";
import listOfStateReducer from "./listOfState1"


/*
const language = 
combineReducers({
    selectedLanguage:languageReducer,
    selectedWorkType:workTypeReducer,
    Data:fetch
} )
*/
  ;


function language(state, action) {
  //alert(listOfStateReducer);
   // const listOfObjects=listOfStateReducer(state, action)
    const intermediateState =languageReducer(state, action)
    const intermediateState1 =workTypeReducer(intermediateState, action)
   // const intermediateState1 =intermediateState(fetch, action)
    const finalState =fetchReducer(intermediateState1, action)
    
    return finalState
  }
 

const allReducers = combineReducers({
    auth:authReducer,
    
    languages:language,
   //listOfObject:listOfStateReducer,
    
  //  listOfState:listOfState,
    devTools: process.env.NODE_ENV !== 'production',
    
  /*  workType:workTypeReducer,
    fetch:fetchReducer,*/
});
 const rootReducer = (state, action) => {
    const { type, payload } = action;
     switch (action.type) {
         case  CLEAR_ALL_REDUCERS_DATA:
             return state = undefined;
        
         default:
             return allReducers(state, action)
     }
 };
 
 export default rootReducer;
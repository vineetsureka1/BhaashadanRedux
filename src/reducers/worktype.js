import { setSelectedLanguage } from "../actions/fetch";
import { SETLANGUAGE,ONLOAD,LOGIN_SUCCESS, LOAD_PARA, SETWORKTYPE } from "../actions/type";
import fetchReducer from "./fetch";

import { combineReducers, configureStore } from '@reduxjs/toolkit'

//const user = null;

const initialState=[];
 const workTypeReducer= (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {

      case LOGIN_SUCCESS:
                return {...state,
                  selectedWorkType:"Pending"
                }
      case SETWORKTYPE:
              return {...state,
                selectedWorkType:payload.selectedWorkType
              };
     /* case SETLANGUAGE:
        return {...state,selectedWorkType:payload.selectedWorkType};
      case SETLANGUAGE:
              return {payload.selectedLanguage*/
 default:
  return state;
}  
};
/*
function languageReducer(state, action) {
    const intermediateState = dataReducer(state, action)
    const finalState = workTypeReducer(intermediateState, action)
    return finalState
  }
  */
  
export default workTypeReducer
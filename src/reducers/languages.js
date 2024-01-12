import { setSelectedLanguage } from "../actions/fetch";
import { SETLANGUAGE,ONLOAD,LOGIN_SUCCESS, LOAD_PARA, SETWORKTYPE } from "../actions/type";
import fetchReducer from "./fetch";
import workTypeReducer from "./worktype";
import { combineReducers, configureStore } from '@reduxjs/toolkit'

//const user = null;

const initialState=[]
 const languageReducer= (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
/*
      case LOGIN_SUCCESS:
            return {...state,selectedLanguage:payload.user.languages[0]};  

     case SETLANGUAGE:
       return  {...state,selectedLanguage:payload.selectedLanguage};  
       case SETWORKTYPE:
        return {...state,selectedWorkType:payload.selectedWorkType,Data:{}};*/

        case LOGIN_SUCCESS:
            return {
              ...state,
              selectedLanguage:payload.user.languages[0]
            };  

     case SETLANGUAGE:
       return  {...state,
           selectedLanguage:payload.selectedLanguage
          };  
      /* case SETWORKTYPE:
        return [...state,selectedWorkType:payload.selectedWorkType,Data:{}}];*/
      
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
  
export default languageReducer
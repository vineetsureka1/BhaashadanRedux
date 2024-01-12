import { SETLANGUAGE,ONLOAD,LOGIN_SUCCESS, LOAD_PARA, SETWORKTYPE } from "../actions/type";
import fetchReducer from "./fetch";
import workTypeReducer from "./worktype";
import { combineReducers, configureStore } from '@reduxjs/toolkit'

//const user = null;

const initialState={selectedWorkType:"Pending"}
 const selectedLanguageReducer= (state=initialState, action) => {
  const { type, payload } = action;
  //alert(type+" state in language reducer "+JSON.stringify(state));
 /* if(payload )
  alert(type+" language payload next url"+JSON.stringify(payload)+" prev state ");//+state.selectedObject.nextUrl);
else
  alert(type+" language payload data not exist");
*/
switch (type) {
  case SETLANGUAGE:
      return{
        ...state,
        selectedLanguage:payload.selectedLanguage,
        selectedWorkType:payload.selectedWorkType,
        selectedObject:{selectedLanguage:payload.selectedLanguage,
                        selectedWorkType:payload.selectedWorkType,
                        results:[...state.results,payload.data.results],
                        prevUrl:payload.data.previous,
                       nextUrl:payload.data.next    
                      },
      };
    case SETWORKTYPE:
      return{
        ...state,
        selectedLanguage:payload.selectedLanguage,
        selectedWorkType:payload.selectedWorkType,
        selectedObject:
                       {selectedLanguage:payload.selectedLanguage,
                        selectedWorkType:payload.selectedWorkType,
                        results:[...state.results,payload.data.results],
                        prevUrl:payload.data.previous,
                       nextUrl:payload.data.next    
                      },
        
      }
    case LOAD_PARA:
      return{
        ...state,
        selectedObject:{
                        ...state.selectedObject,
                       // selectedLanguage:state.selectedLanguage,
                       // selectedWorkType:state.selectedWorkType,
                       // results:[...payload.data.results],
                        results:[...state.results,payload.data.results,...state.results],
                        prevUrl:payload.data.previous,
                        nextUrl:payload.data.next
                        }
                        
       //selectedObject:{...state.selectedObject,results:['a','b','c']}
      }
    case LOGIN_SUCCESS:{
                  return {
                    ...state,
					
                    selectedLanguage:payload.user.languages[0],
                    selectedWorkType:"Pending",
                    selectedObject:{selectedLanguage:payload.user.languages[0],selectedWorkType:"Pending",results:[],
                    prevUrl:null,
                    nextUrl:payload.data.next}
                  }
                    
                }
    default:
      return state;
  }
};

  
    


export default selectedLanguageReducer


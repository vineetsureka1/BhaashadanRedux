import { LOAD_JOB,LOAD_PARA,INITIALIZE,CLEARDATA, SETLANGUAGE,ONLOAD, LOGIN_SUCCESS,SETWORKTYPE } from "../actions/type";

import { useCookies } from 'react-cookie';
import globalconst from "../constant/globalvariables";
import workTypeReducer from "./worktype";

//const user = null;
const initialState=[{results:[]}]

 const fetchReducer= (state=initialState, action) => {
  const { type, payload } = action;

switch (type) {
  /*
  case SETLANGUAGE:
    return{
      
      ...state,
      Data:{}
      
    }
  case SETWORKTYPE:
    return{
      ...state,
      Data:{}
    }*/
    case LOAD_PARA:
      return{
        ...state,
        [payload.selectedLanguage.key+"_"+payload.selectedWorkType]:{
          results:state[payload.selectedLanguage.key+"_"+payload.selectedWorkType] && state[payload.selectedLanguage.key+"_"+payload.selectedWorkType].results.length>0?
          (payload.data.results && payload.data.results.length>0?
            [...Array.from(new Set([...state[payload.selectedLanguage.key+"_"+payload.selectedWorkType].results,...payload.data.results].map(JSON.stringify))).map(JSON.parse)]
            :state[payload.selectedLanguage.key+"_"+payload.selectedWorkType].results)
            :payload.data.results,


        
        prevUrl:payload.data.previous,
        nextUrl:payload.data.next!=null?payload.data.next:state[payload.selectedLanguage.key+"_"+payload.selectedWorkType].nextUrl
      } 
    }
    
    case SETLANGUAGE:
      return{
        ...state,
        [payload.selectedLanguage.key+"_"+payload.selectedWorkType]:
                                                                    state[payload.selectedLanguage.key+"_"+payload.selectedWorkType]?
                                                                    {...state[payload.selectedLanguage.key+"_"+payload.selectedWorkType]} 
                                                                    :
                                                                    {
                                                                      results:payload.data.results,
                                                                      prevUrl:payload.data.previous,
                                                                      nextUrl:payload.data.next
                                                                     }
      }
    case SETWORKTYPE:
      return{
        ...state,
        [payload.selectedLanguage.key+"_"+payload.selectedWorkType]:state[payload.selectedLanguage.key+"_"+payload.selectedWorkType]?{
          ...state[payload.selectedLanguage.key+"_"+payload.selectedWorkType]
      } :
      {
        results:payload.data.results,
        prevUrl:payload.data.previous,
        nextUrl:payload.data.next
      }
      }
    default:
  return state;
}
};
  

  
  export default fetchReducer


  
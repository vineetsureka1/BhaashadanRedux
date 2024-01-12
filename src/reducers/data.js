import { LOAD_JOB,LOAD_PARA,INITIALIZE,CLEARDATA, SETLANGUAGE,ONLOAD, LOGIN_SUCCESS,SETWORKTYPE } from "../actions/type";

import { useCookies } from 'react-cookie';
import globalconst from "../constant/globalvariables";
import workTypeReducer from "./worktype";

//const user = null;
const initialState={results:[]}

 const fetchReducer= (state=initialState, action) => {
  const { type, payload } = action;
  //alert(type+"set in fetch reducer"+JSON.stringify(state));
 /* if(state.selectedObject)
  alert(type+ " fetch next ur "+state.selectedObject.nextUrl+" prev url "+state.selectedObject.prevUrl);
else
alert(type+"fetch not exist")
*/
switch (type) {
  case SETLANGUAGE:
    return{
      ...state,
      
      
      selectedLanguage:payload.selectedLanguage,
      selectedWorkType:payload.selectedWorkType,
      results:[...results,payload.results],
      prevUrl:payload.data.previous,
          nextUrl:payload.data.next
     /*   {
         // results:[...results,
          //   payload.data.results],
          prevUrl:payload.data.previous,
          nextUrl:payload.data.next
        }}
        */
  
  }
  case SETWORKTYPE:
    return{
      ...state,

      selectedLanguage:payload.selectedLanguage,
      selectedWorkType:payload.selectedWorkType,
      results:[...results,payload.results],
      prevUrl:payload.data.previous,
          nextUrl:payload.data.next
     /*   {
         // results:[...results,
          //   payload.data.results],
          prevUrl:payload.data.previous,
          nextUrl:payload.data.next
        }}
        */
    
    }
  
    
    case LOAD_PARA:
      return{
        ...state,

      selectedLanguage:payload.selectedLanguage,
      selectedWorkType:payload.selectedWorkType,
      results:[...results,payload.results],
      prevUrl:payload.data.previous,
          nextUrl:payload.data.next
     /*   {
         // results:[...results,
          //   payload.data.results],
          prevUrl:payload.data.previous,
          nextUrl:payload.data.next
        }}
        */
    
    }
    case LOGIN_SUCCESS:
      return {
        ...state,

        selectedLanguage:payload.selectedLanguage,
        selectedWorkType:payload.selectedWorkType,
        results:[...results,payload.results],
        prevUrl:payload.data.previous,
            nextUrl:payload.data.next
       /*   {
           // results:[...results,
            //   payload.data.results],
            prevUrl:payload.data.previous,
            nextUrl:payload.data.next
          }}
          */
      
    }
        

    
    default:
  return state;
}
};
  

  
  export default fetchReducer


  /*
  case CLEARDATA:
    return{
      ...state, 
     // results:payload.results,
     // fetchpayload:payload
    };
    
    case LOGIN_SUCCESS:
      return{
        ...state,
       // selectedObject:{...state.selectedObject,results:[]},
        
       finalObject:{...state.finalObject,...state.trialObject}
       // language:{lanIndex:0,workType:"Pending",results:[]}
      };
    case ONLOAD:
      return{
        ...state,
       // selectedObject:{...state.selectedObject,results:[]},
        
       finalObject:{...state.finalObject,...state.trialObject}
       // language:{lanIndex:0,workType:"Pending",results:[]}
      };
  case SETLANGUAGE:
    
    return{
      ...state, 
      finalObject:{...state.finalObject,...state.trialObject}
     };
  case LOAD_PARA:
      return {
        ...state,
        finalObject:{...state.finalObject,...state.trialObject}
      };
      
  case INITIALIZE:
    
    alert("initialize "+JSON.stringify(payload));
    const languages=formLanguages(payload);
    alert("languages "+JSON.stringify(languages))
      return {
        ...state,
        languages:languages,
      };
      */
      
      /*case LOAD_PARA:
        return{
          ...state,
          selectedObject:{...selectedObject,result:[...new Set(selectedObject.results,payload.results)]},
        }
      case LOGIN_SUCCESS:
                    return {
                      ...state,
                      selectedLanguage:payload.user.languages[0],
                      selectedWorkType:"Pending",
                      selectedObject:{selectedLanguage:payload.selectedLanguage,selectedWorkType:payload.selectedWorkType,results:[]},
                    }
          */
    

/*
function fetchReducer(state, action) {
  const intermediateState = combinedReducer(state, action)
  const finalState = dataReducer(state, action)
  return finalState
}

const formLanguages=(user)=>{
  //if(payload && user)
  {
      //const user=user;
      const lan=user.languages;
      if(lan){
        var languages=[];
        
        for(var i=0;i<lan.length;i++)
        {
          var key=lan[i].key;
          var item=lan[i].item;
          if(key==="bengali"){
            key="bangla";
            item="Bangla";
          }
          var tempObj={
            id:key,
            title:item,
            Uploaded:{
            isPrevApiCalled:false,
            count:-1,
            items:[],
            pagenumber:0,
            lastPageNumber:-1,
            nextPage:globalconst.apiBaseUrl+'/api/job?language='+key+'&page=1',
            scrollIndex:0,
            hasMore:true
            }
            ,
            Pending:{
            isPrevApiCalled:false,
            count:-1,
            items:[],
            pagenumber:0,
            lastPageNumber:-1,
            nextPage:globalconst.apiBaseUrl+'/api/paragraph?language='+key+'&page=1',
            scrollIndex:0,
            hasMore:true
            }
            
            }
          
          languages.push(tempObj);

        }
        return languages;
      }

  }
  return null;
}
*/
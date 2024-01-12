import React, { useRef, useState} from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity,ActivityIndicator,FlatList,Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import { useCookies } from "react-cookie";
import { withCookies, Cookies } from 'react-cookie';
import { initialize } from "../../actions/fetch";
import { clearAllStoreData } from "../../actions/rootAction";
import Colors from "../../constant/color"
import Styles from "../../constant/GlobalStyles"
import ButtonTypeRadio from "../../customComponent/ButtonTypeRadio"
import { setSelectedLanguage,setWorkType,getParagraph } from "../../actions/fetch";
import languageReducer from "../../reducers/languages";
import CardFrame from "../../customComponent/cardFrame";
import { useEffect } from "react";
import FlatListView from "../../customComponent/FlatLIstView";
import Header from "../../customComponent/Header";
import Profile from "../../customComponent/Profile";
import Logo from "../../customComponent/logo";
import globalconst from "../../constant/globalvariables";
import ModalView from '../../customComponent/ModalView';
import ListOfObject from "../../customComponent/ListOfObject";

const Home = (props) => {
  //const [cookies, setCookie] = useCookies();
  
  function HandleOnScroll({ stateObj,setLangState,dep}) {
    useEffect(() => {
      
     // if(refreshing)
       {
        //setIsLoading(true);
     // setLangState({isLoading:true,refreshing:true});
      //dispatch(getParagraph({selectedLanguage:stateObj.selectedObject.selectedLanguage,selectedWorkType:stateObj.selectedObject.selectedWorkType,alreadyExists:true,nextUrl:stateObj.selectedObject.nextUrl}))
      //setLangState({...langState,refreshing:true});
     // setLangState(false);
     //setIsLoading(true);
     setLangState(false);
      }
      

  
    }, []);

  
   // return langState.isLoading;
  }
  
  






  //const [{isLoading,refreshing},setLangState]=useState({isLoading:true,refreshing:false});
  const stateObj = useSelector((state) => state.language);
  const authObj = useSelector((state) => state.auth);
  const [refreshing,setLangState]=useState(false);
  //const [refreshing,setRefreshing]=useState(false)
  //const flatListRef=React.forwardRef();
  //const [isLoading,setIsLoading]=useState(true)
 
  var initialScrollIndex=0;
  //const [workType,setWorkType]=useState("Pending");
  
  
  const dispatch = useDispatch();
  
  const { navigation }=props;

  
  //alert("reduce "+JSON.stringify(props));
  var first_name='';
  /*
  if(authObj && authObj.user)
  first_name=authObj.user.first_name;
*/

  
const onLogout = (props) => {
  const {cookies}=props;
  //alert("home cookie"+JSON.stringify(cookies));
  
    dispatch(clearAllStoreData())

        navigation.replace("LoginScreen");
 
  };
  
  function handleEndReached(){
    
      //setIsLoading(false);
      //alert("end reached"+refreshing)
      if(refreshing)
      {
       // HandleOnScroll();
        //  setLangState({isLoading:true,refreshing:true});
     //setIsLoading(true);
     //setRefreshing(true);
   // dispatch(getParagraph({selectedLanguage:stateObj.selectedObject.selectedLanguage,selectedWorkType:stateObj.selectedObject.selectedWorkType,alreadyExists:true,nextUrl:stateObj.selectedObject.nextUrl}))
      //setLangState({isLoading:true,refreshing:false});
     initialScrollIndex=initialScrollIndex+9;
      //setRefreshing();
     // setIsLoading(true);
   // setLangState({refreshing:false,isLoading:false});
    //setIsLoading(fal)
   // setLangState(!refreshing);
      }
      
     
      
      
    
  }
  function setRefreshing(){
    //if(!langState.refreshing)
    setLangState(!refreshing);
 
  }
  function handleScroll() {

    
   //alert("handlescroll");
    //setLangState({isLoading:true,refreshing:true});
    //setIsLoading(false);
    if(langState.refreshing)
    {
      setLangState({isLoading:true,refreshing:true});
    }
    else{
      setLangState({isLoading:true,refreshing:false});
    }
    
   // handleEndReached;
    /*  if(!refreshing){
       // dispatch(getParagraph(currentObj.selectedObject))
        dispatch(getParagraph({selectedLanguage:currentObj.selectedObject.selectedLanguage,selectedWorkType:currentObj.selectedObject.selectedWorkType,alreadyExists:true,nextUrl:currentObj.selectedObject.nextUrl}))
        setRefreshing(true);
      }
      else{
       // setRefreshing(false);
      }    
      */
    };
  function onSetLanguage(stateObj,item){
    //const dispatch = useDispatch();
    initialScrollIndex=0
    {
      if(item.key!=stateObj.selectedLanguage.key) {
        var alreadyExists=false;
        var obj=null;
        var workType="job";
        if(stateObj.selectedWorkType=="Pending")
        workType="paragraph"
      var apiURL=globalconst.apiBaseUrl+"/api/"+workType+"?language="+item.key+"&page=1";
      obj=getAlreadyExist(stateObj,item,stateObj.selectedWorkType)
      if(obj.length>0){
        alreadyExists:true;
        if(obj && obj[0] && obj[0].nextUrl && obj[0].nextUrl!=undefined && obj[0].nextUrl!="")
      apiURL=obj[0].nextUrl;
      }
        
      dispatch(setSelectedLanguage({selectedLanguage:item,selectedWorkType:stateObj.selectedWorkType,alreadyExists:alreadyExists,nextUrl:apiURL}))
      }
    }
  };
  function getAlreadyExist(stateObj,selectedLanguage,selectedWorkType){
    var obj=stateObj.listOfObject.filter((obj)=>(obj.selectedLanguage.key==selectedLanguage.key && obj.selectedWorkType==selectedWorkType));
  //  alert("obj"+obj);
    //if(obj.length>0)
    return obj;
 // return false;
  } ;
  function _renderItem(item){
    // alert(item);
    return (<CardFrame {...item} key={item.id} workType={stateObj.selectedObject.selectedWorkType}/>)
  }
  
  function onSetWorkType(stateObj,item){
    initialScrollIndex=0;
   // const dispatch = useDispatch();
    {
    if(stateObj.selectedWorkType!=item) {
      var obj=null;
      var alreadyExists=false;
      var workType="job";
      if(item=="Pending")
      workType="paragraph"
      
      var apiURL=globalconst.apiBaseUrl+"/api/"+workType+"?language="+stateObj.selectedLanguage.key+"&page=1";
      obj=getAlreadyExist(stateObj,stateObj.selectedLanguage.key,item);
      if(obj.length>0)
      {
        alreadyExists:true;
        if(alreadyExists && obj[0] && obj[0].nextUrl && obj[0].nextUrl!=undefined && obj[0].nextUrl!="")
        apiURL=obj[0].nextUrl;
      }

      
      dispatch(setWorkType({selectedLanguage:stateObj.selectedLanguage,selectedWorkType:item,alreadyExists:alreadyExists,nextUrl:apiURL}))
    }  
  }
};
 
return (
  
  <View style={Styles.container}>
    
    
     
      <View style={localStyles.container}>      
      <Header showSearch="false"/>
      
      <View style={localStyles.middleContainer}>
      <Logo/>
      </View>
      
      <View style={localStyles.lastContainer}>
          <View style={localStyles.Profile}>
              <Profile user={authObj.user} {...props} />
          </View>
          <View style={localStyles.content}>
          
              <View style={localStyles.lanConatiner}>
                  <View style={{alignContent:'flex-start',justifyContent:'flex-start',flexDirection:'row',minWidth:'120px',flexWrap:'wrap'}}>
                       { authObj.user.languages.map((item,index) => 
                      <ButtonTypeRadio 
                      key={item.key}
                     style={item.key==stateObj.selectedLanguage.key?[{...localStyles.activeButtonStyle,...localStyles.activeWorkType}]:[{...localStyles.buttonStyle,...localStyles.passiveWorkType}]} 
                     item={item} 
                     handleClick={()=>{onSetLanguage(stateObj,item)}}
                      />)}
                  </View>
                  <View style={{alignContent:'flex-end', justifyContent:'flex-end',flexDirection:'row',minWidth:'80px'}}>
                  <TouchableOpacity onPress={()=>{onSetWorkType(stateObj,"Uploaded")} }>
                        <Text style={[{...localStyles.toggleFirstHalf},stateObj.selectedWorkType!="Uploaded"?{...localStyles.passiveWorkType}:{...localStyles.activeWorkType}]}>Uploaded</Text></TouchableOpacity>
                      <TouchableOpacity onPress={()=>{onSetWorkType(stateObj,"Pending")} }>
                        <Text style={[{...localStyles.toggleSecondHalf},stateObj.selectedWorkType!="Pending"?{...localStyles.passiveWorkType}:{...localStyles.activeWorkType}]}>Pending</Text></TouchableOpacity>
                  </View>
              
              </View>
  
                </View>
                </View>  
                </View>
  
  
    <listOfObject selectedObject={stateObj.selectedObject}/>
     
  
    </View>

    
  );
};
  

 
//export default withCookies(Home);
export default Home


const localStyles= StyleSheet.create({
  header:{
      backgroundColor:'#0eca7e',
      justifyContent:'center',
      //height:'10%',
      flex:1,
      width:'100%', 
     // flexGrow:1,
     minwidth:'380px',
  },
  middleContainer:{
      backgroundColor:'#0aae6c',
      justifyContent:'center',
     // height:'15%',
     flex:1.5,
      width:'100%',
      minwidth:'380px',
  },
  lastContainer:{
      flexDirection:'row',
      backgroundColor:'#e3eaea',
      justifyContent:'center',
     // height:'35%',
     flex:8.5,
      width:'100%',
      minWidth:'380px'
     // flexWrap:'wrap',
      
  },
  Profile:{
      top:'-15%',
     // width:'30%',
      height:'100%',
      flex:3,
      margin:5,
      padding:5,       
      alignItems:'center',
      alignContent:'center',
      flexDirection:'column',
      zIndex:1,
      minWidth:'120px',
      overflow:'auto',
  },
  container: {
      //height:'100%',
      width:'100%',

      flex:10,
      flexDirection:'column',
      backgroundColor: '#0eca7e',
      alignItems: 'center',
      justifyContent: 'flex-start',
      //flexWrap:'nowrap',
     // overflow:'auto',
      zIndex:0,
      minWidth:'380px'
    },
    content:{
       //height:height,
      //width:'65%',
      minWidth:'200px',
      height:'100%',
      flex:7,
       flexDirection:'column',
       backgroundColor: '#e3eaea',
       alignItems: 'flex-start',
       justifyContent: 'center',
       alignContent:'flex-start',
       //flexWrap:'wrap',
      // overflow:'auto',
       // top:100,
     },
    tileContainer:{ 
      //height:height,
      flex:9,
      width:'100%',
      height:'80%',
      flexDirection:'column',
      backgroundColor: '#e3eaea',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignContent:'flex-start',
      //flexWrap:'wrap',
      //overflow:'auto',
      // top:100,
    },
    lanConatiner:{ 
      //flex:1,
      width:'100%',
     // width:'200px',
      flexDirection:'row',
      backgroundColor: '#e3eaea',
      justifyContent: 'space-between',
     // justifyContent: '//#endregion',
     // alignContent:'center',
     // flexWrap:'wrap',
      overflow:'auto',
     // top:100,
    },
    activeButtonStyle:{
      backgroundColor:Colors.dashboardRow2Color,
      borderColor:Colors.dashboardRow2Color,
      borderWidth:1,
      borderRadius:10,
      margin:5,
      height:20,
      //fontSize:10,
      paddingHorizontal:2,
    },
    
    buttonStyle:{
      backgroundColor:Colors.dashboardRow1Color,
      borderColor:Colors.dashboardRow2Color,
      borderWidth:1,
      borderRadius:10,
      margin:5,
      height:20,
      //fontSize:10,
      paddingHorizontal:2,
    },
    toggleFirstHalf:{
      backgroundColor:Colors.dashboardRow2Color,
      borderBottomStartRadius:10,
      borderTopStartRadius:10,
      borderBottomEndRadius:0,
      borderTopEndRadius:0,
      paddingHorizontal:2,
      marginVertical:5,
      height:20,
      //fontSize:10,
    },
    toggleSecondHalf:{
      backgroundColor:Colors.dashboardRow2Color,
      borderBottomStartRadius:0,
      borderTopStartRadius:0,
      borderBottomEndRadius:10,
      borderTopEndRadius:10,
      paddingHorizontal:2,
      //marginTop:5,
      marginVertical:5,
      height:20,
     // fontSize:10,
    },
    passiveWorkType:{
      fontFamily:'Roboto',
      fontSize:'14px',
      fontWeight:'500',
      fontStyle:'normal',
      lineHeight:'20px',
      backgroundColor:'white',
    },
    activeWorkType:{
      fontFamily:'Roboto',
      fontSize:'14px',
      fontWeight:'500',
      fontStyle:'normal',
      lineHeight:'20px',
    }
});
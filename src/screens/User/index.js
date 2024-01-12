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

  const stateObj = useSelector((state) =>(state.languages));

  const authObj = useSelector((state) => state.auth);

  
  const [refreshing,setLangState]=useState(false);
   
  var initialScrollIndex=0;
  
  const dispatch = useDispatch();
  
  const { navigation }=props;
//alert("props"+JSON.stringify(props))  ;
const onLogout = (props) => {
  const {cookies}=props;
  //alert("home cookie"+JSON.stringify(cookies));
  
    dispatch(clearAllStoreData())

        navigation.replace("LoginScreen");
 
  };
  
  function onSetLanguage(selectedLanguageObj){
    //const dispatch = useDispatch();
    initialScrollIndex=0
    {
      if(selectedLanguageObj.key!=stateObj.selectedLanguage.key) {
        var alreadyExists=false;
        var obj=null;
        var workType="job";
        if(stateObj.selectedWorkType=="Pending")
        workType="paragraph"
      var apiURL=globalconst.apiBaseUrl+"/api/"+workType+"?language="+selectedLanguageObj.key+"&page=1";
      if(stateObj && stateObj[selectedLanguageObj.key+"_"+stateObj.selectedWorkType])
      {
       // alert("inside setLanguage");
      apiURL=stateObj[selectedLanguageObj.key+"_"+stateObj.selectedWorkType].nextUrl;
      }
      /*
      else
      alert("inside setLanguage url"+apiURL);*/
    /*  obj=getAlreadyExist(listObj,selectedLanguageObj,stateObj.selectedWorkType)
      if(obj.length>0){
        alreadyExists:true;
        if(obj && obj[0] && obj[0].nextUrl && obj[0].nextUrl!=undefined && obj[0].nextUrl!="")
      apiURL=obj[0].nextUrl;
    
      }
        */
      dispatch(setSelectedLanguage({selectedLanguage:selectedLanguageObj,selectedWorkType:stateObj.selectedWorkType,alreadyExists:alreadyExists,nextUrl:apiURL}))
      }
    }
  };
  function getAlreadyExist(selectedWorkType){
   // alert("list of obj"+JSON.stringify(listObj));
    var obj=listObj.listOfObject.filter((obj)=>(obj.selectedLanguage.key==stateObj.selectedLanguage.key && obj.selectedWorkType==selectedWorkType));
  //  alert("obj"+obj);
    //if(obj.length>0)
    return obj;
 // return false;
  } ;
  function _renderItem(item){
    // alert(item);
    return (<CardFrame {...item} key={item.id} workType={stateObj.selectedWorkType}/>)
  }
  
  function onSetWorkType(selectedWorkType){
    //alert("stateobj"+JSON.stringify(stateObj));
    initialScrollIndex=0;
   // const dispatch = useDispatch();
    {
    if(stateObj.selectedWorkType!=selectedWorkType) {
      var obj=null;
      var alreadyExists=false;
      var workType="job";
      if(selectedWorkType=="Pending")
      workType="paragraph"
      
      var apiURL=globalconst.apiBaseUrl+"/api/"+workType+"?language="+stateObj.selectedLanguage.key+"&page=1";
      if(stateObj && stateObj[stateObj.selectedLanguage.key+"_"+selectedWorkType])
      {
       // alert("inside setWorkType");
      apiURL=stateObj[stateObj.selectedLanguage.key+"_"+selectedWorkType].nextUrl;
      }
     // else
     // alert("inside setWorktype url"+apiURL);
      dispatch(setWorkType({selectedLanguage:stateObj.selectedLanguage,selectedWorkType:selectedWorkType,alreadyExists:alreadyExists,nextUrl:apiURL}))
    }  
  }
};
 
return (
  
  <View style={Styles.container}>
    
    
     
      <View style={localStyles.container}>      
      <Header showSearch="false"/>
      
      <View style={localStyles.middleContainer}>
      <Logo/>
      
      
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
                     handleClick={()=>{onSetLanguage(item)}}
                      />)}
                  </View>
                  <View style={{alignContent:'flex-end', justifyContent:'flex-end',flexDirection:'row',minWidth:'80px'}}>
                  <TouchableOpacity onPress={()=>{onSetWorkType("Uploaded")} }>
                        <Text style={[{...localStyles.toggleFirstHalf},stateObj.selectedWorkType!="Uploaded"?{...localStyles.passiveWorkType}:{...localStyles.activeWorkType}]}>Uploaded</Text></TouchableOpacity>
                      <TouchableOpacity onPress={()=>{onSetWorkType("Pending")} }>
                        <Text style={[{...localStyles.toggleSecondHalf},stateObj.selectedWorkType!="Pending"?{...localStyles.passiveWorkType}:{...localStyles.activeWorkType}]}>Pending</Text></TouchableOpacity>
                  </View>
                  
              </View>
              <ListOfObject selectedLanguage={stateObj.selectedLanguage} selectedWorkType={stateObj.selectedWorkType} dispatch={dispatch}/>
                </View>
                
                </View>  
                
                </View>
                </View>
  
                
     
  
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
    // height:'0'
  },
  middleContainer:{
      backgroundColor:'#0aae6c',
      justifyContent:'center',
      height:'15%',
     //flex:1.5,
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

     // flex:1,
      flexDirection:'column',
      backgroundColor: '#0eca7e',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignContent:'flex-start',
      alignSelf:'flex-start',
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
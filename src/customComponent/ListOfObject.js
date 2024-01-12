import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useLayoutEffect,useState} from 'react';
import react, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Modal, FlatList, ActivityIndicator,SafeAreaView,Dimensions} from 'react-native';
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
//import { useInfiniteQuery } from 'react-query';

import CardFrame from './cardFrame';
import Styles from '../constant/GlobalStyles'
import Header from './Header';
import Profile from './Profile';
import ButtonTypeRadio from './ButtonTypeRadio';
import ModalView from './ModalView';
import FlatListView from './FlatLIstView';
//import LabelContainer from './LabelContainer';


import Colors from '../constant/color'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getParagraph } from './../actions/fetch'
//import Languages from './languages';

const ListOfObject=(props)=>{
    //const [refreshing,setRefreshing] = useState({refreshing:'',isLoading:''});
     const [refreshing,setRefreshing] = useState(false);
     const [isLoading,setIsLoading] = useState(true);
     const stateObj =useSelector((state) =>(state.languages[props.selectedLanguage.key+"_"+props.selectedWorkType]));
    // const [selectedLanguage,setSelectedLanguage]=useState(props.selectedLanguage);
    // const [selectedWorkType,setSelectedWorkType]=useState(props.selectedWorkType);
   // const [initialScrollIndex,setInitialScrollIndex] = useState(-9);
   // const isLoading=true;
    //setIsLoading(props.loading);
    //var initialScrollIndex=-9;
const dispatch=useDispatch();
    //alert("list of obj "+JSON.stringify(stateObj));
    //useEffect(()=>{if(!refreshing) return; getMoreData()},[refreshing]);;
    //useEffect(()=>{getMoreData()},[]);
    
function getMoreData(){
//props.onEndReached
//alert("get End reached called"+stateObj+"refreshing"+refreshing+ " count "+stateObj.results.length);

//setRefreshing({refreshing:false,isLoading:false});
//if(refreshing)
{
  
//if(refreshing){
  
  //initialScrollIndex=initialScrollIndex+9;
  //setInitialScrollIndex(initialScrollIndex+9);
  var apiUrl=stateObj?stateObj.nextUrl:"";
  let result = apiUrl.indexOf("http:");
  if(result>-1)
  apiUrl=apiUrl.replace("http:","https:");

dispatch(getParagraph({selectedLanguage:props.selectedLanguage,selectedWorkType:props.selectedWorkType,nextUrl:apiUrl})).then(response=>{
  setIsLoading(true);
  //setRefreshing(false);
})
//isLoading=false;
//setIsLoading(false)
//stateObj = useSelector((state) =>(state.languages[state.languages.selectedLanguage.key+"_"+state.languages.selectedWorkType]));

//}
}

//else
//setRefreshing({refreshing:true,isLoading:false});

}
//const stateObj = useSelector((state) => state.language.selectedObject.results);

function _renderItem(item){
  // alert(item);
  return (<CardFrame {...item} key={item.id} workType={props.selectedWorkType}/>)
}

return (

<InfiniteScroll
      dataLength={stateObj.results.length}
      next={getMoreData}
      hasMore={stateObj.nextUrl && stateObj.nextUrl!=null ?true:false} // Replace with a condition based on your data source
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
      style={localStyles.tileContainer}
      key={props.selectedLanguage.key+"_"+props.selectedWorkType}
    >
      
      {stateObj.results.map(item => (
      _renderItem({item:item})
    ))}
      
    </InfiniteScroll>
    
                  

)


}


export default ListOfObject;

const localStyles= StyleSheet.create({
  content:{
        
    // height:'100%',
    width:'65%',
    flex:2,
     flexDirection:'row',
     backgroundColor: '#e3eaea',
     alignItems: 'flex-start',
     justifyContent: 'flex-start',
     alignContent:'flex-start',
     flexWrap:'wrap',
    // overflow:'scroll',
    // top:100,
   },
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
    
    tileContainer:{ 
      //height:height,
     // flex:9,
      width:'100%',
      height:'80%',
      flexDirection:'row',
      backgroundColor: '#e3eaea',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignContent:'flex-start',
      flexWrap:'wrap',
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
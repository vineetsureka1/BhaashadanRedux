import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useLayoutEffect,useState,useCallback} from 'react';
import react, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Modal, FlatList, ActivityIndicator,SafeAreaView,Dimensions} from 'react-native';
import axios from "axios";
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
  const dispatch=useDispatch();
const getMoreData=()=>dispatch(getParagraph({selectedLanguage:props.selectedLanguage,selectedWorkType:props.selectedWorkType,nextUrl:url}))
const [url,setUrl]=useState();
 const [refreshing,setRefreshing] = useState(true);
//const stateObj = useSelector((state) =>(state.languages[state.languages.selectedLanguage.key+"_"+state.languages.selectedWorkType]))
useEffect(() => {
  console.log('requestToServer')
  getMoreData(url);
  setRefreshing(false);
}, url)

const { results,nextUrl } = useSelector(state => ({
  ...state.languages[state.languages.selectedLanguage.key+"_"+state.languages.selectedWorkType]
  
}))

const handleLoadMore =
// useEffect(
   () => {
  
  alert(url);
//if(refreshing)
  {
  setRefreshing(true);
  //setNextUrl(nextUrl)
  
  //console.log('loadmore')
  
  //getMoreData(url)

 setRefreshing(false);
  }
  /*
  else
  setRefreshing(true)*/
}
//,url)
    //const [refreshing,setRefreshing] = useState({refreshing:'',isLoading:''});
    // const [refreshing,setRefreshing] = useState(false);
    // const [isLoading,setIsLoading] = useState();
   // const [initialScrollIndex,setInitialScrollIndex] = useState(-9);
   // const isLoading=true;
    
    //var initialScrollIndex=-9;
    /*const [stateObj,setStateObj]=useState(
                                {language:useSelector((state) =>(state.languages[state.languages.selectedLanguage.key+"_"+state.languages.selectedWorkType])),
                                  refreshing:false,isLoading:false});*/

    //alert("list of obj "+JSON.stringify(stateObj));
   // useEffect(()=>{if(!refreshing) return; getMoreData()},[refreshing]);;
   //function loadInitial(){ useEffect(()=>{getMoreData()},[]);};
/*function getMoreData(){
//props.onEndReached
alert("get End reached called"+stateObj.language+"refreshing"+stateObj.refreshing+ " count "+stateObj.isLoading);

//setRefreshing({refreshing:false,isLoading:false});
//if(refreshing)
{
  
//if(refreshing){
  
  //initialScrollIndex=initialScrollIndex+9;
  //setInitialScrollIndex(initialScrollIndex+9);
  setStateObj({...stateObj,isLoading:true});
  var apiUrl=stateObj?stateObj.language.nextUrl:"";
  
dispatch(getParagraph({selectedLanguage:props.selectedLanguage,selectedWorkType:props.selectedWorkType,nextUrl:apiUrl})).then(response=>{
  setStateObj({...stateObj,isLoading:false});
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
*/
//const stateObj = useSelector((state) => state.language.selectedObject.results);

function _renderItem(item){
  // alert(item);
  return (<CardFrame {...item} key={item.id} workType={props.selectedWorkType}/>)
}

return (
<View >

              {
             
             refreshing ?
             <View>
             
            <ActivityIndicator>
            {handleLoadMore()}
            </ActivityIndicator>
             </View> 
             :
             

              
            
             <View>
             <FlatListView
                   //ref={flatListRef}
                   keyExtractor={(item,index) => item.id+"_"+index}
                  // key={(item)=>item.id}
                   contentContainerStyle={{ justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}
                   data={useSelector(state => ({
                    ...state.languages[state.languages.selectedLanguage.key+"_"+state.languages.selectedWorkType].results
                    
                  }))}
                   renderItem={(item,index)=>_renderItem(item,index)}
                //  renderItem={(item)=><View><Text>{item.id}</Text></View>}
                   ListEmptyComponent={<View><Text> No item exists</Text></View>}
                   hasMore={true}
                  //prevUrl  nextUrl
                  onEndReached={setUrl(useSelector(state => ({
                    ...state.languages[state.languages.selectedLanguage.key+"_"+state.languages.selectedWorkType].nextUrl
                    
                  })))}
                  // initialNumToRender={10}
                  scrollEnabled={true}
                //onScroll={() => {setRefreshing(true)}}
                 //initialScrollIndex={initialScrollIndex}
                 //  initialnum
                 //progressViewOffset={4}
                 onEndReachedThreshold={0.1}
                 maxToRenderPerBatch={10}
                  // horizontal={false}
                //refreshing={refreshing}
                //pagingEnabled={true}
               // onRefresh={()=>setRefreshing(!refreshing)}
              //  onMomentumScrollBegin = {() => {alert("1")}}
                //onScrollEndDrag={()=>alert("2")}
              
               // onViewableItemsChanged={()=>alert("3")}

                 /*onEndReached = {() => {
    if (!refreshing.isLoading) {
      getMoreData();    // LOAD MORE DATA
      setRefreshing({...refreshing,isLoading: true});
    }}}*/
                   />
                 
             </View>  
             }        
               </View> 
)


}


export default ListOfObject;

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
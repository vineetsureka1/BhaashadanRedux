import React from 'react';
//import react, { Component } from 'react';
import {  View,Text,Image, ScrollView} from 'react-native';


import Styles from '../../constant/GlobalStyles'
import Logo from '../../customComponent/logo';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import globalconst from '../../constant/globalvariables';
import { login, onLoad  } from "./../../actions/auth";

import ReactPlayer from 'react-player';
import homeVideo from "../../../assets/video/home.mp4";
import Colors from '../../constant/color';



const handleCookie=(props)=>{
  const dispatch = useDispatch();
   const [cookies, setCookie] = useCookies(['bhaashadan']);
   //alert("home props"+JSON.stringify(props));
   axios.defaults.baseURL = globalconst.apiBaseUrl;
   if(cookies && cookies.bhaashadan && cookies.bhaashadan.user)
    { dispatch(onLoad(cookies.bhaashadan.user)).then((response)=>{
     // alert("navigation onload "+JSON.stringify(response));
     // dispatch(initialize(response.bhaashadan.user));


     props.navigation.replace("UserDashboard",{user:cookies.bhaashadan.user,dispatch:dispatch});
     
    // navigation.navigate("UserDashboard",{user:cookies.bhaashadan.user});


   // initialRouteName="UserDashboard";
     })
     /*.catch(error=>{
      alert ("dispatch user error"+error);
     })*/
    }
   else
   {
   dispatch(onLoad(null))
  /*.then((response)=>{
    alert ("dispatch null response"+response)
  }).catch(error=>{ alert ("dispatch null error"+error)})*/
  }
}

const Home=(props)=>{
  const video=React.useRef(null);
  
  handleCookie(props);
    return(                     
          <View style={Styles.homeContainer} >
              <Logo />
              <View style={Styles.homeContentContainer} >
                <View style={Styles.homeLeftContainer} >
                <Text style={Styles.homeHeading}>Overview:</Text>
                  <Text style={Styles.homeTextContent}>
                    
              <center></center>    
Come join us in building a collection of handwritten documents in Indian Languages.
Volunteers who are experts in any of the 13 languages( Assamese, Bangla, Gujarati, Hindi, Kannada, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu and Urdu) can register online and contribute to this project by handwriting the provided documents. The documents will be verified by language experts and uploaded to the database, which will be available to the public for research purposes.
Based on the number of documents uploaded after verification a certificate of appreciation will be issued to the volunteers for their valuable contribution towards the advancement of Handwritten Text Research.
<br/><br/>
For more details please refer to <Text style={{color:Colors.LoginHeaderText}} onPress={()=>redirectToFaq(props)}> FAQs</Text>

                  </Text>
                </View>
                <View style={Styles.homeRightContainer}>
                  <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
                  <ReactPlayer ref={video} url={homeVideo} controls={true} />

      
                      
                      <br/>
                  </View>
                </View>
              </View>
              <View style={Styles.homeButtonContainer}>
                <Text style={[Styles.button,Styles.textWhite]} onPress={()=>handleSignIn({...props,"isCreate":false})}>Sign In</Text>
                <Text style={[Styles.button,Styles.textWhite,{visibility:'hidden'}]} onPress={()=>handleRegister({...props,"isCreate":true})}>Register</Text>
                <Text style={[Styles.button,Styles.textWhite]} onPress={()=>handleRegister({...props,"isCreate":true})}>Register</Text>
              </View>
          </View>
        );                    
}

const handleSignIn=(props)=>{
 
  props.navigation.navigate('Login',{isCreate:props.isCreate});
  return;
  //alert("after");
}
const redirectToFaq=(props)=>{
  props.navigation.navigate('Faq');
}
const handleRegister=(props)=>{
  
  props.navigation.navigate('Register',{isCreate:props.isCreate});
  return;
  
  //alert("after");
}
export default Home;




import React from 'react';
//import react, { Component } from 'react';
import {  View,Text,Image, ScrollView,ImageBackground,Linking,TouchableOpacity} from 'react-native';


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

//const image = {require("./../assets/iiitnew.png")};


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
      <ImageBackground source={require('../../assets/bgImage.png')} resizeMode="cover" style={Styles.backGroundImageStyle}>
          <View style={Styles.homeContainer} >
            
              
              <Logo />
              <View style={Styles.homeButtonContainer}>
              <Text style={[Styles.button,Styles.textWhite]} onPress={()=>handleRegister({...props,"isCreate":true})}>Register</Text>
              
                <Text style={[Styles.button,Styles.textWhite]} onPress={()=>handleSignIn({...props,"isCreate":false})}>Sign In</Text>
                
                
              </View>
              <View style={Styles.homeContentContainer} >
                <View style={Styles.homeLeftContainer} >
                
                  <Text style={Styles.homeTextContent}>
           
              <Text style={Styles.textStyle}>Come join us</Text> in building
the largest collection of <Text style={Styles.textStyle}>
   handwritten</Text> documents
in Indian Languages.


                  </Text>
                </View>
                <View style={Styles.homeRightContainer}>
                  <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
                  <ReactPlayer ref={video} url={homeVideo} controls={true} />

      
                      
                      <br/>
                  </View>
                </View>
                
              </View>
             
              <View style={{flexDirection:'row',marginHorizontal:'10px',flex:1}}>
                <Text style={Styles.linkStyle} onPress={() => window.open('/ContactUs')}>
                Connect with us
                </Text>
                <Text style={Styles.linkStyle} onPress={() =>window.open('/Faq')}>
                FAQ
                </Text>
                <Text style={Styles.linkStyle} onPress={() => window.open('/TermsAndCondition')}>
                Terms and Conditions
                </Text>
                </View>
              </View>
              
          
          </ImageBackground>
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




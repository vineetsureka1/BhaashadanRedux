import React from 'react';
//import react, { Component } from 'react';
import {  View,Text,Image, ScrollView} from 'react-native';


import Styles from '../constant/GlobalStyles'

const Home=(props)=>{
    return(                     
          <View style={Styles.homeContainer} >
              <Image style={Styles.logo} source={require("../assets/iiitnew.png")} />
              <View style={Styles.homeContentContainer} >
                <View style={Styles.homeLeftContainer} >
                <Text style={Styles.homeHeading}>Lorem ipsum dolor sit amet consectetur.</Text>
                  <Text style={Styles.homeTextContent}>
                    
                  Overview:
Come join us in building a collection of handwritten documents in Indian Languages.
Volunteers who are experts in any of the 13 languages( Assamese, Bangla, Gujarati, Hindi, Kannada, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu and Urdu) can register online and contribute to this project by handwriting the provided documents. The documents will be verified by language experts and uploaded to the database, which will be available to the public for research purposes.
Based on the number of documents uploaded after verification a certificate of appreciation will be issued to the volunteers for their valuable contribution towards the advancement of Handwritten Text Research.

For more details please refer to FAQs

                  </Text>
                </View>
                <View style={Styles.homeRightContainer}>
                  <View style={{justifyContent:'center',alignItems:'center',alignContent:'center',alignSelf:'center'}}>
                      <iframe
                      src="../assets/video/home.mp4"
                      //frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen={true}
                      title="video"
                      /><br/>
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
const handleRegister=(props)=>{
  
  props.navigation.navigate('LoginOrRegister',{isCreate:props.isCreate});
  return;
  
  //alert("after");
}
export default Home;




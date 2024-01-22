import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./../screens/Login/index";
//import Login from "./../screens/Login/Login";
import Home from "./../screens/Login/Home";
import UserDashboard from "../screens/User/index";
import Register from "./../screens/Login/Register";
import { useCookies } from 'react-cookie';
import axios from "axios";
import globalconst from "../constant/globalvariables";
import { useDispatch ,useSelector} from "react-redux";
import { onLoad } from "./../actions/auth";
import { initialize } from "../actions/fetch";
import { useState } from "react";
import { onLoad as loginAction } from "./../actions/auth";
import Faq from '../screens/Login/Faq'
import ContactUs from '../screens/Login/ContactUs'
import TermsAndCondition from '../screens/Login/TermsAndCondition'
//import UserDashboard from "../screens/User/OldUserDashboard";
const Stack = createNativeStackNavigator();

var initialRouteName='Home';

const NavigationProvider = (props) => {
  const [cookies, setCookie] = useCookies(['bhaashadan']);
  // alert("home props"+JSON.stringify(props));
   
   if(props.location.pathname=="/")
{
  initialRouteName='Home';
}
else
{
  initialRouteName=props.location.pathname.substring(1);
 // alert(initialRouteName);
}

   const dispatch = useDispatch();
   var params1={...props};
   if(cookies && cookies.bhaashadan && cookies.bhaashadan.user)
  {
    //initialRouteName="UserDashboard";
    params1={...params1,user:cookies.bhaashadan.user,dispatch:dispatch}

  } 
  //handleCookie();
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName={initialRouteName}>
    <Stack.Screen
        name="Faq"
        component={Faq}
        options={{ headerShown: false }}
        {...props}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ headerShown: false }}
        {...props}
      />
      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
        options={{ headerShown: false }}
        {...props}
      />
    <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        {...props}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        {...props}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
        {...props}
      />
<Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{ headerShown: false }}
        {...params1}
    //    user={cookies.bhaashadan.user}
   //     dispatch={dispatch}
      />

    </Stack.Navigator>
    </NavigationContainer>
  )
};
export default NavigationProvider;
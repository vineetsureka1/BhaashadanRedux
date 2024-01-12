import React from 'react';
import react, { Component } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { withCookies, Cookies,useCookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import GlobalStyles from '../constant/GlobalStyles';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { clearAllStoreData } from '../actions/rootAction';


 const Logout=(props)=> {

    const [cookies, setCookie, removeCookie] = useCookies(['bhaashadan']);
        return(
                <View style={styles.logout}>
                <TouchableOpacity style={styles.logout}>
                    <Text style={[GlobalStyles.button,GlobalStyles.textWhite]} onPress={()=>{logout()}}>
                    Logout
                    </Text>
                    </TouchableOpacity>
                </View>
                );
    
   function logout() {
       // const { cookies } = this.props;
       // alert("props"+JSON.stringify(props));
       removeCookie('bhaashadan',{path:'/'});
       /* if( this.props.route.params && this.props.route.params.dispatch)
        this.props.route.params.dispatch(clearAllStoreData());
        else*/
        if(props && props.dispatch)
                props.dispatch(clearAllStoreData());
        //super.componentWillUnmount();
       // alert(JSON.stringify(this.props.navigation));
        props.navigation.replace('Home');
        }
}

export default Logout;

const styles=StyleSheet.create({

logout:{
   // width:150,
   // height:50,
   alignItems:'flex-end',
    fontSize:5,
   // borderRadius:5,  
    textAlignVertical:'center', 
    
    //textAlign:'center',
},
appButtonText:{
    backgroundColor:'#0ccb7c',
    borderRadius:5,
    height:28,
    //fontSize:16,
    textAlign:'center',
    padding:2,
    margin:2,
    color:'white',
    fontFamily: 'Roboto',
    fontWeight:'500',
    fontSize: '16px',
    lineHeight:'20px',
    //fontStyle:'normal',
    textAlign:'center',
    //alignSelf:'center',
    //alignItems:'center',
   // alignContent:'center',
   textAlignVertical:'center',
    
    
    
}

});

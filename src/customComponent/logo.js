import {Image } from 'react-native';
import React from "react";
import styles from "./../constant/GlobalStyles";


const Logo=()=>{
    return(<Image style={styles.logo} source={require("./../assets/logo.png")} />)
}
export default Logo
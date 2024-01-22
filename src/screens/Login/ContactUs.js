import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { Formik,Form } from "formik";
import { View, Text, StyleSheet, TextInput, Button,Image,Ul,li } from "react-native";
import { login } from "./../../actions/auth";

import { Checkbox,ConfigProvider  } from "antd"
import axios from "axios";


//import DatePicker from 'react-native-datepicker';
import dayjs from 'dayjs';
import { Formik, Field, Form,useFormikContext,useField} from "formik";

import styles from "../../constant/GlobalStyles";
import Colors from "../../constant/color";
import globalconst from '../../constant/globalvariables';

import CustomInput from "../../customComponent/CustomInput"
import { useCookies } from 'react-cookie';

import * as yup from 'yup';
import { getParagraph, initialize } from "../../actions/fetch";



const Faq = (props) => {
  




return (
  
  <View style={{backgroundColor:Colors.HomeColor}}>
      <View style={{flexDirection:'column'}}>
      <Image style={styles.logo} source={require("../../assets/iiitnew.png")} />
          <br/>
          <View style={{width:'80%',alignSelf:'center'}}>
             <center> <Text style={styles.loginHeaderText}>Contact US</Text></center>
             
          
              <View>
                <Text>
                1. How can I contribute?
                </Text>
                
                <Text>
                A. Register on our website <Text style={{color:Colors.LoginRow2Color}} onPress={()=>redirectToHomePage(props)}>Bhasha Daan</Text>
                </Text>
                <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;Choose a language - Assamese, Bangla, Gujarati, Hindi, Kannada, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu and Urdu.
                </Text>
                <Text>
                &nbsp;&nbsp;&nbsp;&nbsp;Handwrite the document provided and upload a good quality photograph of the handwritten document.
                </Text>
                <br/>
                <Text>
                2. Which languages can I contribute to? 
                </Text>
                
                <Text>
                A. Assamese, Bangla, Gujarati, Hindi, Kannada, Malayalam, Manipuri,       
Marathi, Odia, Punjabi, Tamil, Telugu, Urdu.

                </Text>
                <br/>
                <Text>
                3. Which languages can I contribute to? 
                </Text>
                
                <Text>
                A. Assamese, Bangla, Gujarati, Hindi, Kannada, Malayalam, Manipuri,       
Marathi, Odia, Punjabi, Tamil, Telugu, Urdu.

                </Text>
                <br/>
                <Text>
                4. Who can volunteer?
                </Text>
                
                <Text>
                A. Anyone with good knowledge of the language(s) mentioned above.

                </Text>
                <br/>
                <Text>
                5. What happens if my handwritten document is rejected?
                </Text>
                
                <Text>
                A. You can re-write and upload again.

                </Text>
                <br/>
                <Text>
                6. Can I write with a pencil?
                </Text>
                
                <Text>
                A. We prefer writing with a pen. 

                </Text>
                <br/>
                <Text>
                7. Do I need to include my name or any other personal information in the handwritten document?
                </Text>
                
                <Text>
                A. No. Do not add any information other than what is being displayed to you to be written down.

                </Text>
                <br/>
                <Text>
                8. Can I delete my uploaded file?
                </Text>
                
                <Text>
                A. The files that are approved by the admin cannot be deleted.

                </Text>
                <br/>
                <Text>
                9. My handwriting is not very good. Can I still write and upload?
                </Text>
                
                <Text>
                A. Yes, we want a variety of data. You can write even if your handwriting is not very good. Make sure, the words are readable.

                </Text>
                <br/>
                <Text>
                10. How old do I have to be to participate?
                </Text>
                
                <Text>
                A. There are no age limitations, as long as you can read and write in the languages mentioned above.

                </Text>
                <br/>
                <Text>
                11. Can I edit/correct already uploaded documents?
                </Text>
                
                <Text>
                A. If the document is not approved by the admin, you can rewrite and upload.

                </Text>
                <br/>
                <Text>
                12. Is there a limit to the number of documents that can be uploaded?
                </Text>
                
                <Text>
                A. Only one photo per each text.


                </Text>
                <br/>
                <Text>
                13. Can I contribute to more than one language?

                </Text>
                
                <Text>
                A. Yes.

                </Text>
                <br/>
                <Text>
                14. What’s my benefit?

                </Text>
                
                <Text>
                A. A certificate will be issued based on the number of documents.

                </Text>
                
                
              </View>
          
          
          
          </View>
      </View>
 </View>
 
 
 

)
}
const  CheckboxField =({ ...props }) => {
const { setFieldValue } = useFormikContext();
const [field] = useField(props);

return (
  <ConfigProvider
  theme={{
    token: {
      colorPrimary: Colors.LoginBorderColor,
      colorBorder: Colors.LoginBorderColor,
      paddingXS:2,
      marginXS:2,
      fontSize:20,
    },
  }}
>
  <Checkbox
    {...field}
    {...props}
    onClick={val=>setFieldValue(field.name,val)}
  />
  </ConfigProvider>
);
};

function handleForgotPassword(){

}
function handleRegister(props){
 // alert(JSON.stringify(props));
props.navigation.navigate('Register',{"isCreate":true});
}
function redirectToHomePage(props){
  props.navigation.navigate('Home');
}
export default Faq;
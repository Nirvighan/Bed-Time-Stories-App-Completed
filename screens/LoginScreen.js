import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView,Image,Alert} from 'react-native';

import * as firebase from 'firebase';
import image1 from '../screen1img.png';
import AppHeader from '../AppHeader';

export default class LoginScreen extends React.Component
{

constructor()
{
    super();
    this.state = {
      emailId:'',
      password:''
    }
}

login = async (emailId,password) => 
{

    if(emailId && password)
    {
        console.log("Login with "+this.state.emailId +"Password is " + this.state.password);
      try{
          const response = await firebase.auth().signInWithEmailAndPassword(emailId,password);
          console.log("response"+response);
          if(response)
          {
            this.props.navigation.navigate("ReadStory");
          }
          
      }
      catch(error)
      {
          switch(error.code)
          {
              case 'auth/invalid-email':
                  
                      Alert.alert("This user does not exist!!");

                      break;
                  

                  case 'auth/wrong-password':
                      Alert.alert("Incorrect password!!");
                      break;
                      default: console.log(error.code);
                      break;
          }
      }
    }
} 

    render()
    {
        return(
            <KeyboardAvoidingView style = {{width:'100%',height:'100%'}}>
              <View>
                  <AppHeader/>
                  <Image
                   source ={image1} 
                   style = {{width:200,height:200,alignSelf:'center'}}
                  />

                  <Text style = {{textAlign:'center',fontSize:30,marginBottom:20}}>Welcome to Bed Time Stories App</Text>
              </View>
              <View>
                  <TextInput style = {styles.loginBox}
                   placeholder = "abc@example.com"
                   keyboardType = 'email-address'
                   onChangeText = {(text) => {
                       this.setState({
                           emailId:text
                       })
                   }}
                 />

<TextInput style = {styles.loginBox}
                   placeholder = "enter password"
                   secureTextEntry = {true}
                   onChangeText = {(text) => {
                       this.setState({
                           password:text
                       })
                   }}
                 />
              </View>

              <View>
                  <TouchableOpacity
                    style = {{height:30,width:90,borderWidth:1,marginTop:10,paddingTop:5,borderRadius:7,alignSelf:'center'}}
                    onPress = {() =>{
                        this.login(this.state.emailId,this.state.password);
                    }}
                  >
                      <Text style = {{textAlign:'center'}}>LOGIN</Text>
                  </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox:
    {
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        marginTop:10,
        paddingLeft:10,
        alignSelf:'center'
    }
})


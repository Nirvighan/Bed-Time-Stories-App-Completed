import React from 'react';
import { StyleSheet, Text, View,TextInput , TouchableOpacity,Image,KeyboardAvoidingView,Alert} from 'react-native';
import AppHeader from '../AppHeader';
import image2 from '../assets/image pro bed story.png';
import db from '../Config';
import firebase from 'firebase';

console. disableYellowBox = true;

export default class WriteScreen extends React.Component
{

constructor()
{
    super();

    this.state = 
    {
        Titletext:'',
        Storytext:'',
        authortext:'',
        Storynumber:'',
        date:''
    }
}

submitStory = async() => {
 db.collection("MyStories").add({
   'StoryNumber':this.state.Storynumber,
 'StoryTitle':this.state.Titletext,
 'StoryBody':this.state.Storytext,
 'StoryAuthor':this.state.authortext,
 'date':this.state.date,

 })



}

    render()
    {
        return(
          <KeyboardAvoidingView  style = {{width:'100%', height:'100%'}}
          behavior = "padding"enabled
          >
            <View style = {{width:'100%', height:'100%'}}
            >
               <AppHeader/>

               <Image
                style = {styles.image}
                source = {image2}
               />

<TextInput
            style = {styles.inputBox4}
            placeholder = 'Story No.'
            onChangeText={Storynumber => {
                this.setState({ Storynumber: Storynumber });
              }}
            value = {this.state.Storynumber}
            
            
            />

<TextInput
            style = {styles.inputBox5}
            placeholder = 'date'
            onChangeText={date => {
                this.setState({ date: date });
              }}
            value = {this.state.date}
            
            
            />



              <Text style = {styles.text}>Write a story</Text>
            
              <TextInput
            style = {styles.inputBox1}
            placeholder = 'Title'
            onChangeText={Titletext => {
                this.setState({ Titletext: Titletext });
              }}
            value = {this.state.Titletext}
            
            
            />

<TextInput
            style = {styles.inputBox2}
            placeholder = 'Story'
            onChangeText={Storytext => {
                this.setState({ Storytext: Storytext });
              }}
            value = {this.state.Storytext}
            
            
            />

<TextInput
            style = {styles.inputBox3}
            placeholder = 'Author'
            onChangeText={authortext => {
                this.setState({ authortext: authortext });
              }}
            value = {this.state.authortext}
            
            
            />

            <TouchableOpacity
             style = {styles.button}
             onPress = {() => {
               this.submitStory();
               this.setState({
                Titletext:'',
                Storytext:'',
                authortext:'',
                Storynumber:'',
                date:''
               })
               Alert.alert("Your story is submitted");
               
             }}>
                <Text style = {styles.buttonText}>Send</Text>
            </TouchableOpacity>


            
           
            </View>
            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    text:{

        
        fontSize:30,
        
        alignSelf:'center',
        color:'#B71C1C'
        
        
    },

    inputBox1:
    {
      width:380,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:20,
      alignItems:'center',
      borderColor:"#B71C1C"
    },
    inputBox2:
    {
      width:380,
      height:120,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:20,
      alignItems:'center',
      borderColor:"#B71C1C"
    },

    inputBox3:
    {
      width:380,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:20,
      alignItems:'center',
      borderColor:"#B71C1C"
    },

    inputBox4:
    {
      width:100,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:5,
      marginLeft:295,
      borderColor:"#B71C1C",
      
    },
 
    inputBox5:
    {
      width:100,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20,
      alignSelf:'center',
      marginTop:5,
      marginLeft:295,
      borderColor:"#B71C1C",
      
    },




    button:{
        
        width:200,
        borderWidth:1.5,
        borderLeftWidth:0,
        borderRadius:10,
        height:40,
        alignSelf:"center",
        marginTop:20,
        borderColor:"#B71C1C"
    },

    buttonText:{
        fontSize: 20,
        textAlign:'center',
        color:'#B71C1C'
      },

    image:
    {
      width: 150,
    height: 150,
    alignSelf:'center',
    marginTop:5,
    backgroundColor:'white'
    }
})

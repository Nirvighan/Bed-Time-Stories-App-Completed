import React from 'react';
import { StyleSheet, Text, View,Image ,TextInput,TouchableOpacity , FlatList} from 'react-native';
import AppHeader from '../AppHeader';
import image1 from '../screen1img.png';
import db from '../Config';
import firebase from 'firebase';


export default class ReadScreen extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            allStories:[],
            search:'',
            lastVisiblestory:null,
        }
    }
    
    searchStories= async(text) =>{
        
        /*if (enteredText[0] ==='H' || enteredText[0] === 'h'){*/
          const story =  await db.collection("MyStories").get()
          
          story.docs.map((doc)=>{
            this.setState({
              allStories:[...this.state.allStories,doc.data()],
              
            })

          })
        /*}
        else
        {
            var t1 = "OOOPs! look like a mistake in typing";
            var t2 = "type as instructed in the search box";
        }*/
        console.log(this.state.allStories);
      }
    

    render()
    {
        return(
            <View  style = {{width:'100%', height:'100%'}}
            >

                <View style = {styles.searchBar}>
                <AppHeader/>
                <Text style = {styles.text}>WELCOME TO READING AREA</Text>
                <Image
                style = {styles.image}
                source ={image1} 
                />

<TextInput style = {styles.bar}
         
         placeholder = "Enter stories"
         onChangeText = {(text) => {
             this.setState({
                 search:text
             })
         }}/>

         <TouchableOpacity
          style = {styles.searchButton}
          onPress = {() => {
              this.searchStories(this.state.search);
              
          }}
         >
          <Text>Search</Text>
         </TouchableOpacity>

         
         </View>


         <FlatList
          data={this.state.allStories}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
                <Text style = {styles.storytext}>{"Date: " + item.date}</Text>
                <Text style = {styles.storytext}>{"Story No.: " + item.StoryNumber}</Text>
              <Text style = {styles.storytext}>{"Title: " + item.StoryTitle}</Text>
              <Text style = {styles.storytext}>{"Body: " + item.StoryBody}</Text>
              <Text style = {styles.storytext}>{"Author: " + item.StoryAuthor}</Text>
              
              
              
            </View>
          )}
          
          
        /> 
        



            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{

        
        fontSize:30,
        marginTop:10,
        alignSelf:'center',
        color:'#B71C1C'
        
        
    },

    storytext:{

        
        fontSize:20,
        
        marginLeft:100,
        color:'#B71C1C'
        
        
    },

    image:
    {
        width: 200,
    height: 200,
    alignSelf:'center',
    marginTop:30
    },
    bar:{
        borderWidth:2,
        height:30,
        width:300,
        paddingLeft:10,
        alignSelf:'center'
      },
      searchButton:{
        borderWidth:1,
        height:30,
        width:80,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'yellow',
        marginTop:30
      },

      
      searchBar:{
        flexDirection:'column',
        height:"75%",
        width:'auto',
        borderWidth:0.5,
        alignItems:'center',
        
    
      },
})


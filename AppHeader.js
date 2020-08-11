import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeader extends React.Component {

    render()
    {
      return (
        <View style={styles.container}>
          <Text style = {styles.text}>BED TIME STORIES APP</Text>
    
          
          
        </View>
      );
    }
    
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
     
      backgroundColor: '#FFF176',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:40
    },

    text:{
        fontSize:30,
        color:'#B71C1C',


    }
  });
  
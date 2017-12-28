import React, {Component} from 'react';
import {Text, View, Button,} from 'react-native';

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
    headerStyle:{
      elevation:0,
      backgroundColor:'#000'
    }, 
    headerRight:(  
       <Text/>
    ), 
    headerTitleStyle:{
      alignSelf:'center'
    },
    headerTintColor:'#fff'
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.name}</Text>
      </View>
    );
  }
}
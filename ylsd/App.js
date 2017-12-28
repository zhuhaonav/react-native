/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainPage from './src/page/MainPage';
import ChatPage from "./src/page/ChatPage";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const Navigator = StackNavigator({
  Chat: {screen: ChatPage},
  Main: {screen: MainPage,},
},
  {
    initialRouteName:'Main',
    mode:'card',
  }
);
export default class App extends Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

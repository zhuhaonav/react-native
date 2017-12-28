import React, {Component} from 'react';
import {
  Text, 
  View, 
  Button, 
  Image, 
  StyleSheet, 
  ViewPagerAndroid} from 'react-native';

  class Tabcon extends Component{
    render(){
      return(
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}>
          <View style={styles.pageStyle}>
            <Text>First page</Text>
          </View>
          <View style={styles.pageStyle}>
            <Text>Second page</Text>
          </View>
        </ViewPagerAndroid>
      )  
    }
  }
export default class MainScene extends Component{
  //导航栏设置
  static navigationOptions = {
    title: 'E代收',
    headerLeft:(  
      <Image style={{width:30,height:30,marginLeft:10}}
        source={require('../images/logo.png')}
      />  
    ), 
    headerRight:(  
      <Image style={{width:30,height:30,marginRight:10}}
        source={require('../images/logo.png')}
      />  
    ), 
    headerStyle:{
      elevation:0,
      backgroundColor:'#000'
    }, 
    headerTitleStyle:{
      alignSelf:'center'
    },
    headerTintColor:'#fff'
  };
  //构造器
  constructor(props){
    super(props)
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
        {/*tab切换*/}
        <Tabcon></Tabcon>
        <Text
          style={[styles.bigblue]}
          onPress={() => navigate('Chat', { name: 'Jane' })}
        >
        在线下单
        </Text>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  bigblue: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding:12,
    backgroundColor:'rgb(240,91,71)'
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
});
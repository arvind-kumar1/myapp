import React, { Component } from 'react';
import { View, Text,Dimensions} from 'react-native';
import Addadmin from './Addadmin';
import Adduser from './Adduser';

import Showadmin from './Showadmin';
import FirstPage from './FirstPage';
import Settings from './Settings';
import {ActivityIndicator,BottomNavigation} from 'react-native-paper';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    
  }
 
 
 
  render() {
    
    return (
      <View style={{flex:1,height:Height,width:Width}}>
      <AppContainer/>
   
      </View>
    );
  }
}

const navigation =  createSwitchNavigator({
  Showadmin,
  Addadmin,
  FirstPage,
  Settings,
  Adduser,
})
const AppContainer = createAppContainer(navigation);

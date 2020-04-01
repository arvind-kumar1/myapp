import React, { Component } from 'react';
import { View, Text,ScrollView} from 'react-native';
import {Appbar,Menu,Provider,Button,Card,Title, Divider,IconButton,Colors} from 'react-native-paper';
import firebase from 'react-native-firebase'
import Adduser from './Adduser';
import Addadmin from './Addadmin';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
    };
  }
  getUser(){

      firebase.firestore().collection('Users').get()
      .then((data) => {
        
          data.forEach((dat) => {
              this.setState({fullname:dat.data().fullname})
          })
      })
  }
logoutId(){
   firebase.auth().signOut()
   .then(() => {
       this.props.navigation.navigate('Showadmin')
   })
}
  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

componentDidMount(){
    this.getUser()
}

  render() {
    return (
      <View>
         <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Hello"
          
        />
        <Appbar.Action icon='magnify'/>
        <Provider>
<Menu
   onDismiss={this._closeMenu}
  visible={this.state.visible}
  anchor={
     <Appbar.Action
      
     
       color="white"
       icon='dots-vertical'
       onPress={this._openMenu}
     />
   }>
        <Menu.Item  title="Log Out" onPress={() => this.logoutId()} />
        <Divider/>
       <Menu.Item  title="Add User"  onPress={() => this.props.navigation.navigate('Adduser')} />
      

</Menu></Provider>
        
      </Appbar.Header>
     <ScrollView>
     <Card >
        
       <Card.Content>
           <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
           <Title >
               {this.state.fullname}
           </Title>
           <IconButton
    icon="pencil"
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
    <IconButton
    icon="delete"
    color={Colors.red500}
    size={20}
    onPress={() => {}}
  />
           </View>
          
       </Card.Content>
    
      
     
     </Card>
     </ScrollView>
      </View>
    );
  }
}

export default FirstPage;

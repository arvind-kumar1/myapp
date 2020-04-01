import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {TextInput,Button,Appbar} from 'react-native-paper';
import firebase from 'react-native-firebase';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

class Showadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    };
  }
login(){
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then(() => {
        this.props.navigation.navigate('FirstPage')
    })
    .catch((err) => {
        alert(err);
    })
}
// watchAuthState(navigation) {
//     firebase.auth().onAuthStateChanged(function(user) {
//       console.log('onAuthStatheChanged: ', user)
      
//       if (user) {
//         navigation.navigate('FirstPage');
//       }
//     });
//   }
//   componentDidMount() {
//     this.watchAuthState(this.props.navigation)
//   }
  render() {
    return (
      <View style={{flex:1}}>
          <Appbar.Header>
       
       <Appbar.Content
         title="Hello "
        
       />
       
     </Appbar.Header>
        <View style={{padding:10}}>
          
        <TextInput
      mode="outlined"
        label='Email'
        onChangeText={(t) => this.setState({email:t})}
        value={this.state.email}
       />
         <TextInput
      mode="outlined"
        label='Password'
        onChangeText={(t) => this.setState({password:t})}
        value={this.state.password}
       />
     <Button  mode="contained"  style={{marginTop:10}} onPress={() => this.login()}>
    Login
  </Button>
  <Text style={{alignSelf:'center'}}>
      or
  </Text>
  <Button mode="contained" onPress={() => this.props.navigation.navigate('Addadmin')}>
    Create An Account
  </Button>
 
 
        </View>
      
      </View>
    );
  }
}

export default Showadmin;

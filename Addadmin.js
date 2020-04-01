import React, { Component } from 'react';
import { View, Text,Dimensions,TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {TextInput,Button,Appbar} from 'react-native-paper';
class Addadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname:'',
      email:'',
      password:''
    };
  }
addData(){
  firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
  .then((data) => {
    let uid = data.user.uid;
    firebase.firestore().collection('Admins'+"usertype").doc(uid).set({
  fullname:this.state.fullname,
  email:this.state.email,
  password:this.state.password
    })
    .then(() => {
      this.props.navigation.navigate('FirstPage')
    })
    .catch((err) => {
      alert(err);
    })
  })
  .catch((err) => {
    alert(err)
  })
}
// watchAuthState(navigation) {
//   firebase.auth().onAuthStateChanged(function(user) {
//     console.log('onAuthStatheChanged: ', user)
    
//     if (user) {
//       navigation.navigate('FirstPage');
//     }
//   });
// }
// componentDidMount() {
//   this.watchAuthState(this.props.navigation)
// }
  render() {
    return (
      <View style={{flex:1}}>
       <Appbar.Header>
       
        <Appbar.Content
          title="Admin"
         
        />
        
      </Appbar.Header>
        <View style={{padding:10}}>
          
          <TextInput
      mode="outlined"
        label='Full Name'
        onChangeText={(t) => this.setState({fullname:t})}
        value={this.state.fullname}
       />
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
        secureTextEntry
        value={this.state.password}
       />
     <Button mode="contained" onPress={() => this.addData()} style={{marginTop:10}}>
    Signup
  </Button>
  <Text style={{alignSelf:'center'}}>
    or
  </Text>
  <Button mode="contained" onPress={() => this.props.navigation.navigate('Showadmin')} >
   Already Have an Account
  </Button>
  
  
 
        </View>
      
      </View>
    );
  }
}

export default Addadmin;

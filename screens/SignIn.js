import React, {Component} from 'react';
import {View, Text, StyleSheet , Image,TouchableOpacity,Button, TextInput, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Auth0 from 'react-native-auth0';
import AsyncStorage from "@react-native-community/async-storage";
const auth0 = new Auth0({
  domain: 'dev-mliibbd9.us.auth0.com',
  clientId: 'yNyRd8aI7anSe1FESAnexZKm79QYi1tE',
});
const Separator = () => (
  <View style={Styles.separator} />
);

export default class SignIn extends Component{
  constructor(props) {
    super(props);
    this.state={
      accessToken:null,
    }
  }
   onLogin = (navigate) => {
    auth0.webAuth
  .authorize({scope: 'openid email profile'})
  .then( credentials = async() => {
    Alert.alert("Notice", "Login Successfull")
      this.setState({accessToken:credentials.accessToken});
    // this.storedata = async() => {
      try{
      await AsyncStorage.setItem('token','UUID123')
    } catch(e){
      console.log(e);
  }
},)
    navigate('Map'); 
  }
  onLogOut =async() => {
  //   try{
  //     await AsyncStorage.setItem('accessToken',credentials)
  //   } catch(e){
  //     console.log(e);
  //   }
  // }
      this.storedata
  //   const final = this.state.accessToken;
 auth0.webAuth.clearSession().catch(error => console.log(error)); 
  // return final;
}
  render() {
    
    const { navigate } = this.props.navigation;
    let loggedIn = this.state.accessToken === null?false:true;
    return(
      <View style={Styles.Container}>
      <View style={Styles.header}>
          <Animatable.Image
          animations='bounceIn'
          duraton="1500"

       source= {require('./assests/login.png')} style={Styles.direction}/>

      </View>
      <Animatable.View style={Styles.footer}
      animation="fadeInUpBig"
      >
        <Text style={{fontSize:17, top:-10 , fontFamily:'Times New Roman' }}> Almost There !!</Text>

      <Separator />
      <Button title='Sign In' onPress={()=> loggedIn ?this.onLogOut: this.onLogin(navigate)}/>
      <Separator />

      </Animatable.View>
  </View>
    );
}
}

const Styles = StyleSheet.create({
  Container: {
  flex:1,
  backgroundColor:'#eaeaff',
  },
  header :{
  flex:6,
  justifyContent:'center',
  alignItems:'center'
  },
  footer:{
    flex:2,
     backgroundColor: '#fff',
     borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical:30,
      paddingHorizontal:30
  },
  direction : {
  width: 350,
  height : 350,
  position:'absolute',
  top:60
  },
  nextLogo:{
  width:300,
  height:30,
  top:25,
  },
  
  textIn :{
    color: '#05375a',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    top:-10,
    fontFamily:'Times New Roman'
   
  },
  pass :{
      color: '#05375a',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      top:1,
      fontFamily:'Times New Roman'
     
    },
    separator: {
      marginVertical: 8,
    },
  });
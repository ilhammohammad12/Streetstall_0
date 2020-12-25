import React, {Component} from 'react';
import {View, Text, StyleSheet , Image,TouchableOpacity,Button, TextInput, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Auth0 from 'react-native-auth0';

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
  
  onLogOut =(navigate) => {
    auth0.webAuth.clearSession().catch(error => console.log(error));
    navigate('SplashScreen2')
    
  }
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={Styles.Container}>
        <Text style= {Styles.item2}>MAIN BUSSINESS LOGIC IN THIS PAGE</Text>
      <Button title='Sign out' onPress={()=> this.onLogOut(navigate)}/>
      <Separator />
  </View>
    );
}
}

const Styles = StyleSheet.create({
  Container: {
  flex:1,
  backgroundColor:'#ffffb1'
  },
 
  item: { 
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'italics',
    top:17,
  },
  
  });
import React, {Component} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
import {View, Text, StyleSheet , Image,TouchableOpacity,Button, TextInput, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Auth0 from 'react-native-auth0';
import AsyncStorage from "@react-native-community/async-storage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { createDrawerNavigator } from 'react-navigation-drawer';
import Geolocation from '@react-native-community/geolocation';

const auth0 = new Auth0({
  domain: 'dev-mliibbd9.us.auth0.com',
  clientId: 'yNyRd8aI7anSe1FESAnexZKm79QYi1tE',
});
const Separator = () => (
  <View style={Styles.separator} />
);


class Maps extends Component {
  constructor(props){
    super(props);
    this.state ={
      latitude:0,
      longitude:0,
    };
  }
  componentDidMount(){
    Geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude:position.coords.longitude,
      });
    });
  }
render() {
  return(
    <View style={Styles.mapcontainer}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={Styles.map}
      region={{
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker coordinate={this.state}/>
    </MapView>
  </View>
  );
  }
}
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={Styles.container}>  
          <Text>search nearby Screen</Text>      
        </View>  
    );  
  }  
} 

 class signOut extends Component{
  constructor(props) {
    super(props);
    this.state={
      accessToken:null,
    }
  } 
  onLogOut =(navigate) => {
  auth0.webAuth.clearSession().catch(error => console.log(error)); 
  AsyncStorage.removeItem('token')
    navigate('SplashScreen2')
  }
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={Styles.Container}> 
      {/* <Icon style={{ paddingRight: 10 }} onPress={() => navigate.openDrawer()} name="md-menu"  size={30} />   */}
        <Text style= {Styles.item2}>sign out</Text>
      <Button title='Sign out' onPress={()=> this.onLogOut(navigate)}/>
      <Separator />
  </View> 
    );
}
}
// const appDrawer = createDrawerNavigator(
  
// class drawer extends Component{
//   render(){
//     <Icon  
//     style={{ paddingLeft: 10 }}  
//     onPress={() => navigation.openDrawer()}  
//     name="md-menu"  
//     size={30} />  
//     return(
//       <appDrawer.Navigator>
//       <appDrawer.Screen name="Settings" component={signOut} />
//     </appDrawer.Navigator>
//     );
//   }
// }

const Tab= createBottomTabNavigator();

 export default class main extends Component {
  render(){
    return(
      <Tab.Navigator >
        <Tab.Screen options={{
          tabBarLabel:'home',  
                 tabBarIcon:({tintColor})=>(  
                      <Icon name="home" color={tintColor} size={18}/>  
                   )  
        }} 
        name="Maps" component={Maps} />
        <Tab.Screen options={{
          tabBarLabel:'Find Nearby',  
                 tabBarIcon:({tintColor})=>(  
                      <Icon name="map" color={tintColor} size={18}/>  
                   )  
        }} name="ProfileScreen" component={ProfileScreen} />
         <Tab.Screen options={{
          tabBarLabel:'Profile',  
                 tabBarIcon:({tintColor})=>(  
                      <Icon name="person" color={tintColor} size={18}/>  
                   )  
        }} 
        name="signOut" component={signOut} />
      </Tab.Navigator>
      
    );
  }
}
// const RootStack =  createStackNavigator();
// export default  class App extends Component{
//   render(){
//    return(
//     <RootStack.Navigator headerMode='none' >
//     <RootStack.Screen name='main' component={main} />
//   </RootStack.Navigator>
//   );
//    }
// }

const Styles = StyleSheet.create({
  Container: {
  flex:1,
  backgroundColor:'white'
  },
  mapcontainer: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 600,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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

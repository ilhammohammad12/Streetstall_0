import React, {Component} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE,Callout, CalloutSubview } from 'react-native-maps'; 
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
      present_location:{
      latitude:0,
      longitude:0,
    },
    goTo_location:{
      latitude:0,
       longitude:0,
    }
  };
  }
  componentDidMount(){
    Geolocation.getCurrentPosition(position => {
      this.setState({
        present_location:{
        latitude: position.coords.latitude,
        longitude:position.coords.longitude,
      }, 
    });
    }
    );
  }
goToMyLocation(){
  Geolocation.getCurrentPosition(position => {
    this.setState({
      goTo_location:{
      latitude1: position.coords.latitude,
      longitude1:position.coords.longitude,
    }, 
  });
  }
  );
}
render() {
  console.log('your present location',this.state.present_location)
  return(
    <View style={Styles.mapcontainer}>
    <MapView showsUserLocation={true}
     mapType="standard"
     zoomEnabled={true}
     pitchEnabled={true}
     followsUserLocation={true}
     showsCompass={true}
     showsBuildings={true}
     initialRegion={this.state.initialRegion}
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={Styles.map}
      region={{
        latitude: this.state.present_location.latitude,
        longitude: this.state.present_location.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      {/* <Marker coordinate={this.state.present_location}/> */}
      <MapView.Marker
    coordinate={{
        latitude: this.state.present_location.latitude,
        longitude: this.state.present_location.longitude, 
    } 
  }
    title={ 'myTitle' }
    description={ 'myDescription' }
    pinColor={ 'black' }
    onCalloutPress={() => alert('Clicked')
    }
>
    <MapView.Callout>
        <View>
            <Text>Im here!</Text>
        </View>
        
    </MapView.Callout>
</MapView.Marker>
</MapView>
<View style={Styles.header} >
<TouchableOpacity style={{top:160,left:30}}  onPress={()=>this.goToMyLocation}>
<Icon name='compass' size={35} />
<MapView
region={{
  latitude:this.state.goTo_location.latitude,
  longitude:this.state.goTo_location.longitude,
  latitudeDelta:0.1,
  longitudeDelta:0.1,
}}>
</MapView>
</TouchableOpacity>
</View>
  </View>
  );
  }
}
class Explore extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      present_location:{
      latitude:0,
      longitude:0,
    },
    select_location:null
    }
  }
  componentDidMount(){
    Geolocation.getCurrentPosition(position => {
      this.setState({
        present_location:{
        latitude: position.coords.latitude,
        longitude:position.coords.longitude,
      }});
    });
  }
  render(){
    return(
        <View style={Styles.mapcontainer}>
        <MapView style={Styles.map} region={{
        latitude: this.state.present_location.latitude,
        longitude: this.state.present_location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,

      }
    }showsUserLocation={true}
onPress={(e) => this.setState({ select_location: e.nativeEvent.coordinate},
  console.log(this.state.select_location)
)}>
{
      this.state.select_location && <MapView.Marker coordinate={this.state.select_location}/>
}
</MapView>
<View style={Styles.header} >
<TouchableOpacity style={Styles.next}  onPress={()=>alert('clicked')}>
<Icon name='create' size={50} />
<Text>Confirm the location</Text>
</TouchableOpacity>
</View>
</View>

    );
  }
}
class ProfileScreen extends React.Component {  
  render() {  
    return ( 
        <View style={Styles.profcontainer}> 
        <Text style={{color:"white",fontFamily:'italics', fontSize:20, top:50, left:50}}>Travel is to live</Text> 
          <Text style={{color:'white',top:150}}>search hotels with resective to your mood</Text> 
          <View style={{flex:0.5, left:5, top:170, width:160,height:80 , backgroundColor:'white'}}>
            <Text>HAPPY</Text>
          </View>
          <View style={{ flex:0.5,left:190, bottom:-87,width:160,height:80 , backgroundColor:'white'}}>
          <Text>Birthday</Text>
          </View>
          <View style={{ flex:0.5,left:5, top:110, width:160,height:80 , backgroundColor:'white'}}>
          <Text>celebrate</Text>
          </View>
          <View style={{  flex:0.5,left:190, bottom:-28,width:160,height:80 , backgroundColor:'#ffd8d8'}}>
          <Text style={{color:'black'}}>Couples spot</Text>
          <Image source ={require('./assests/heart2.png')} style={{width: 180,height: 100, top:-10
    }}/>
          </View>
          <View style={{ flex:0.5,top:50,left:5, width:160,height:80 , backgroundColor:'white'}}>
          <Text>feeling alone</Text>
          </View>
          <View style={{  flex:0.5,left:190, bottom:32,width:160,height:80 , backgroundColor:'white'}}>
          <Text>Silent places</Text>
          </View>
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


const Tab= createBottomTabNavigator();

 export default class main extends Component {
  render(){
    return(
      <Tab.Navigator  tabBarOptions={{
        inactiveBackgroundColor: '#474747',
            style: {
                  backgroundColor: '#DCDCDC',
            }
     }}>
        <Tab.Screen options={{
          tabBarLabel:'home',  
                 tabBarIcon:({tintColor})=>(  
                      <Icon name="home" color={tintColor} size={18}/>  
                   )  
        }} 
        name="Maps" component={Maps} />
         <Tab.Screen options={{
          tabBarLabel:'Explore',  
                 tabBarIcon:({tintColor})=>(  
                      <Icon name="bookmark" color={tintColor} size={18}/>  
                   )  
        }} 
        name="Explore" component={Explore} />
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


const Styles = StyleSheet.create({
  Container: {
  flex:1,
  backgroundColor:'white'
  },
  profcontainer:{
   flex:1,
   backgroundColor:'#333333',

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
  square: {
    width: 150,
    height: 100,
    backgroundColor: '#ffff9d',
  },
  square2: {
    width: 150,
    height: 150,
    backgroundColor: "blue",
  },
  tinyLogo :{
    width: 140,
    height: 100,
    top: 48, 
 
},
buttonCallout: {
  flex: 1,
  flexDirection:'row',
  bottom:10,
  alignSelf: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  borderWidth: 0.5,
  borderRadius: 20
},
touchable: {
  backgroundColor: "lightblue",
  padding: 10,
  margin: 10
},
touchableText: {
  fontSize: 24
},
header :{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
  },
  textIn :{
    color: '#05375a',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    top:-10,
    fontFamily:'Times New Roman'
   
  },
  next: {
    top:180,
    padding: 10,
},
  });

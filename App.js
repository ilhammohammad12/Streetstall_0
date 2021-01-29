import React , {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  firstScreen from './screens/firstScreen';
import  HomeScreen from './screens/HomeScreen';
import  Details from './screens/Details';
import RootStack from './screens/Login';
import Login from './screens/Login';
import  Map from './screens/Map';
import { StyleSheet, Text, View , Image ,ActivityIndicator} from "react-native";
import { useEffect } from 'react';
import {AuthContext} from "./components/context";
import  SignIn from "./screens/SignIn";
import SplashScreen2 from './screens/SplashScreen2';
import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();

function App({}){
  const [state,setState]= useState('null')
  // const value
  //    useEffect( async() => {
  //       try {
  //         value  = await AsyncStorage.getItem('token');
  //        console.log (usetoken)
  //    }
  //    catch(e){
  //       console.log(e);
  //  } 
  // });
  // let retrieveData = async () => {
  //   try {
  //    let value = await AsyncStorage.getItem('token');
  //    if (value !== null ){
  //      <Login/>
  //    }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };
  useEffect(()=>{
    setTimeout(async()=>{
       try {
        setState(await AsyncStorage.getItem('token'));
    }
    catch(e){
       console.log(e);
    }
    },100);
    },[]);
  return(
 <NavigationContainer>
   {state !== null ? (
     <Login/>
   )
     :
    <Stack.Navigator headerMode='none'> 
    <Stack.Screen   name="SplashScreen" component={firstScreen} />
      <Stack.Screen    name="Home" component={HomeScreen} />
      <Stack.Screen    name = "Details" component ={Details}/>
      <Stack.Screen name='SplashScreen2' component={SplashScreen2}/>
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='Map' component={Map} />
      </Stack.Navigator>  
}
</NavigationContainer>
  )
}
export default App;
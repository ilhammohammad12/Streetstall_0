import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  firstScreen from './screens/firstScreen';
import  HomeScreen from './screens/HomeScreen';
import  Details from './screens/Details';
import  Login from './screens/Login';
import  Map from './screens/Map';


const Stack = createStackNavigator();

function App({}){
  return(
 <NavigationContainer>
  <Stack.Navigator headerMode='none'>
  <Stack.Screen   name="SplashScreen" component={firstScreen} />
    <Stack.Screen    name="Home" component={HomeScreen} />
    <Stack.Screen    name = "Details" component ={Details}/>
    <Stack.Screen name = "Login" component ={Login}/>
    <Stack.Screen   name = "Map" component ={Map}/>
  </Stack.Navigator>

 </NavigationContainer>
  );

}
export default App;
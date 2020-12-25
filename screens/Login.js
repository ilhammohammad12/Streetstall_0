import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen2 from './SplashScreen2';
import SignIn from './SignIn';




const RootStack =  createStackNavigator();
const Login = ({navigation}) => (
    <RootStack.Navigator headerMode='none' >
      <RootStack.Screen name='SplashScreen2' component={SplashScreen2} />
      <RootStack.Screen name= 'SignIn' component={SignIn}/>

    </RootStack.Navigator>

);

    export default Login;
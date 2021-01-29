import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SplashScreen2 from './SplashScreen2';
import Map from './Map'

const RootStack =  createStackNavigator();
const Login = ({}) => (
    <RootStack.Navigator headerMode='none' >
      <RootStack.Screen name='Map' component={Map} />
      <RootStack.Screen  name='SplashScreen2' component={SplashScreen2} />
    </RootStack.Navigator>

);

    export default Login;
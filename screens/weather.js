import React, {useState} from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import GeoLocation from '@react-native-community/geolocation';
import { Component, useEffect } from 'react/cjs/react.development';
// navigator.geolocation = require('@react-native-community/geolocation');
import Geolocation from '@react-native-community/geolocation';

export default function weat ({navigation}){
  const [weatherCondition,setweatherCondition] = React.useState(null);
  const [temperature,settemperature] = React.useState(null)
  const [isLoading,setisLoading] = React.useState('false')
  const [longitude,setlongitude] = React.useState(null)
  const [langitude,setlangitude] = React.useState(null)
  useEffect(()=>{
    try{
      Geolocation.getCurrentPosition(position => {
        setlangitude(position.coords.latitude)
        setlongitude(position.coords.longitude)
        // console.log(langitude,longitude)
      });
    }
      catch(e){
        console.log(e);
     }
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${langitude}&lon=${longitude}&APPID=4bb5704bdc62eae8f11ee8a50bf1407d&units=metric`
    ).then(resp => resp.json())
      .then(json => {
        // console.log(json,'weather');
        setweatherCondition(json.weather[0].main)
        settemperature(json.main.temp)
        setisLoading(false)
        // console.log(weatherCondition)
        // console.log(temperature)
      }).catch((error)=>{
        console.log('error');
      })
      
    });
    setTimeout(() => {
      navigation.navigate('Map')
    }, 2000);
    return (
      <View style={styles.container}>
        {isLoading ? <Text></Text> :
          <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[weatherCondition].color }]}>
          <View style={styles.headerContainer}>
              <Text style={styles.tempText}>RainCheck -  {temperature}°</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Text style={{alignItems:'center', bottom:150 , color: '#fff' ,fontSize:38}}>STREET                       STALL</Text>
              <Text style={styles.title}>{weatherConditions[weatherCondition].title}</Text>
              <Text style={styles.subtitle}>{weatherConditions[weatherCondition].subtitle}</Text>
          </View>
      </View>          
          }
      </View>
    );
  }
 
 const weatherConditions = {
    Rain: {
      color: '#005BEA',
      title: 'Raining',
      subtitle: 'Get a umbrella',
      icon: 'weather-rainy'
    },
    Clear: {
      color: '#f7b733',
      title: 'Sunny',
      subtitle: 'Captian !  All Clear',
      icon: 'weather-sunny'
    },
    Thunderstorm: {
      color: '#616161',
      title: 'A Storm is coming',
      subtitle: 'Odin is angry',
      icon: 'weather-lightning'
    },
    Clouds: {
      color: '#1F1C2C',
      title: 'Clouds',
      subtitle: 'Might need a rain coat',
      icon: 'weather-cloudy'
    },
  
    Snow: {
      color: '#00d2ff',
      title: 'Snow',
      subtitle: 'Christmas will be snowy..joey !!',
      icon: 'weather-snowy'
    },
    Drizzle: {
      color: '#076585',
      title: 'Drizzle',
      subtitle: 'Wont get wet.. may be..',
      icon: 'weather-hail'
    },
    Haze: {
      color: '#66A6FF',
      title: 'Haze',
      subtitle: 'it is raining ',
      icon: 'weather-hail'
    },
    Mist: {
      color: '#3CD3AD',
      title: 'Mist',
      subtitle: "Look out!",
      icon: 'weather-fog'
    }
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tempText: {
        fontSize: 23,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});

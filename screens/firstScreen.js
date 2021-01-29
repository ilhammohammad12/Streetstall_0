import React from 'react';
import { ImageBackground, StyleSheet, Text, View , Image ,Button, ActivityIndicator ,TouchableOpacity} from "react-native";


function firstScreen({navigation}){
      setTimeout(() => {
      navigation.navigate('Home')
    }, 2000);
    return(
    <View style= {styles.container}>
     <ImageBackground source = {require('./assests/bg.jpg')} style={styles.logo}>
     <Image source ={require('./assests/logof.png')} style={styles.tinyLogo} />
      <Text style ={styles.item} >STREET{'\n'}             STALL</Text>
      <Image source ={require('./assests/maps.png')} style={styles.maps} />
      <View style = {[styles.container2, styles.horizontal]}>
      <ActivityIndicator size = 'large' color='#FFFFFF'/>
       </View>
       </ImageBackground>   
    </View>
  );
  } 
const styles = StyleSheet.create({
    container : {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#ffff',
    },
  
    container2 :{
      justifyContent:'center',
      alignItems:'center',
    },
  
    horizontal: {
      bottom: 50,
    },
    tinyLogo :{
        width: 140,
        height: 100,
        top: 48, 
     
    },
    maps : {
      width: 100,
        height: 80,
        alignSelf: 'flex-end',
        opacity: 0.9,
        top:10,
    },
      item: { 
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: 'italics',
      top:17,
    },
    logo :{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    });
export default firstScreen;
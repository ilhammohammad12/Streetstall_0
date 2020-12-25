import React from 'react';
import { ImageBackground, StyleSheet, Text, View , Image ,Button, ActivityIndicator ,TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';
function Details({navigation}){
    return(
      <View style= {styles.container} >
      <Animatable.View style= {styles.container2} animation="fadeInUp">
      <Image source ={require('./assests/Paper.png')} style={styles.direction} />
      <Text  style ={styles.item3}  >Locate & Share some of the best street stalls that often go unnoticed..</Text>
      </Animatable.View>
      <View style= {styles.buttonStyles} >
       <TouchableOpacity  style={styles.next} 
       onPress={()=> navigation.navigate('Login')}>
         <Image source ={require('./assests/next_f.png')}  style={styles.nextLogo}/>
         <Text style={{top:7, fontSize:20 ,fontWeight: "bold" }}> Next</Text>
       </TouchableOpacity>
       </View>
       <View style= {styles.buttonStyles2} >
       <TouchableOpacity  style={styles.next} 
       onPress={()=> navigation.navigate('Login')}>
         <Image source ={require('./assests/skip.png')} style={{width:35,height:35,top:5}} />
         <Text style={{top:7, fontSize:20 ,fontWeight: "bold" }}> Skip</Text>
        </TouchableOpacity>
       </View>
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
    direction : {
      width: 300,
      height : 300,
      position:'absolute',
      top: -15,
    },
    direction2 : {
      width: 250,
      height : 200,
      position:'absolute',
      top: 10,
    },
    buttonStyles :{
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0,
    },
    buttonStyles2 :{
      alignSelf: 'flex-start',
      position: 'absolute',
      bottom: 0,
    },
    next: {
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 10,
  },
  nextLogo:{
    width:40,
    height:40,
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
    item2: { 
      color: "black",
      fontSize: 25,
      fontWeight: "bold",
      position:'absolute',
      top:300,
      left:20,
      justifyContent:'center',
      fontFamily: 'sans-serif-thin',
    },
    item3: { 
      color: "black",
      fontSize: 25,
      fontWeight: "bold",
      position:'absolute',
      top:300,
      left:20,
      fontFamily: 'sans-serif-thin',
    },
    logo :{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    headline: {
      fontWeight: 'bold',
      fontSize: 35,
      color:"black",
      marginTop: 250,
      width: 200,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
  },
  dotsContainer: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
    });
    export default Details;
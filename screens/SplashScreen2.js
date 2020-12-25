import React, {Component} from 'react';
import {View, Text, StyleSheet , Image,TouchableOpacity,Button, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';



function SplashScreen2 ({navigation}){
    return(
        <View style={Styles.Container}>
            <View style={Styles.header}>
                <Animatable.Image
                animations='bounceIn'
                duraton="1500"
  
             source= {require('./assests/Navigation.png')} style={Styles.direction}
            resizeMode="stretch"/>
            </View>
            <Animatable.View style={Styles.footer}
            animation="fadeInUpBig"
            >
              <Text style={{fontSize:20 , top:-10 , fontFamily: 'sans-serif-thin' ,fontWeight: "bold",}}> 
            Explore and  Share !!!</Text>
            <Button title='Get Started!' style={{top:50}}
            onPress={()=> navigation.navigate('SignIn')} 
            />
            </Animatable.View>
        </View>
    );
}

const Styles = StyleSheet.create({
  Container: {
  flex:1,
  backgroundColor:'#eaeaff'
  },
header :{
    flex:5,
    justifyContent:'center',
    alignItems:'center'
},
footer:{
    flex:1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical:30,
    paddingHorizontal:30
},
direction : {
    width: 300,
    height : 350,
    position:'absolute',
    top: 20,
  },
  nextLogo:{
    width:300,
    height:30,
    top:25,
  },
});
export default SplashScreen2;
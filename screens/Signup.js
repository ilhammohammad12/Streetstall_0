import React from 'react';
import {View, Text, StyleSheet , Image,TouchableOpacity,Button, TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
const Separator = () => (
    <View style={Styles.separator} />
  );
function SignUp({navigation}){
    return(
        <View style={Styles.Container}>
        <View style={Styles.header}>
        <Text style={{fontSize:20, fontWeight:'bold', fontFamily: 'sans-serif-thin'}}>     Sign UP !</Text>
        </View>
        <Animatable.View style={Styles.footer}
        animation="fadeInUpBig"
        >
          <Text style={{fontSize:17, top:-10 , fontFamily:'Times New Roman' }}> Login Details </Text>
          <Separator />
        <TextInput style={Styles.textIn} autoCapitalize='none'
        placeholder="Enter your Username"
        >
        </TextInput>
        <TextInput style={Styles.pass} autoCapitalize='none' 
        placeholder="Enter your Password"
        secureTextEntry={true}>
        </TextInput>
        <TextInput style={Styles.pass} autoCapitalize='none' 
        placeholder="confirm your Password"
        secureTextEntry={true}>
        </TextInput>
        <Separator />
        <Button title='Sign Up' onPress={()=>  navigation.navigate('Map')}/>
        <Separator />
        <Button title='Sign In' onPress={()=>  navigation.goBack()}/>
        </Animatable.View>
    </View>
);
}

const Styles = StyleSheet.create({
Container: {
flex:1,
backgroundColor:'#b7dbff'
},
header :{
flex:1,
justifyContent:'center',
alignItems:'center'
},
footer:{
  flex:4,
   backgroundColor: '#fff',
   borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical:30,
    paddingHorizontal:30
},
direction : {
width: 475,
height : 450,
position:'absolute',
top:-20,
},
nextLogo:{
width:300,
height:30,
top:25,
},

textIn :{
  color: '#05375a',
  borderBottomWidth: 1,
  borderBottomColor: 'gray',
  top:-10,
  fontFamily:'Times New Roman'
 
},
pass :{
    color: '#05375a',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    top:1,
    fontFamily:'Times New Roman'
   
  },
  separator: {
    marginVertical: 8,
  },
});
  export default SignUp;
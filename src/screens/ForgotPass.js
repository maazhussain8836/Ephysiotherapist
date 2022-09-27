import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Image11 from '../assets/images/ef.webp';
import CustomInputs from '../components/CustomInputs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import CustomButtons from '../components/CustomButtons';
const ForgotPass = ({navigation}) => {
const [Email, setEmail] = '';
  return (
    
    <View style={{display:'flex',justifyContent:'center',flex:1,flexDirection:'column',backgroundColor:'#FFF',opacity:1}}>
      <SafeAreaView>
        {/* <Image source={Image11} style={styles.loginImage} /> */}
        <ImageBackground source={Image11} resizeMode="contain" style={styles.loginImage}>
          <View style={{width:"100%",height:"100%",backgroundColor:'#FFF' ,opacity:0.4,position:"absolute"}}>
          </View>
       
        </ImageBackground>
        <View style={{...styles.backgroundView}}>
        <Image
              source={require('../assets/images/logoP4.png')}
              style={{width: '100%', height: '25%', resizeMode: 'contain'}}
            />
          <View style={{padding:20,position:'relative'}}>
            <Text style={{...styles.text,textAlign:'center'}}>Please Input Your Email</Text>
            <Icon size={22} color="#113255" name="email-outline" style={{position:'absolute',top:90,left:26}}/>
            <CustomInputs
              placeholder={'Email'}
              secureTextEntry={false}
              value={Email}
              setValue={setEmail}
            />
            
          </View>
        
          <View style={{marginVertical:'4%'}}>
            <Pressable onPress={()=>{navigation.navigate('Verification')}}>
            {/* button Login */}
            <CustomButtons  text={'Send Code'}/>
            </Pressable>
          </View>
         
        </View>
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: "100%",
    height: 270,
    // resizeMode: 'contain',
    // opacity: 10,
    backgroundColor: '#FFF',
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  },
  backgroundView: {
    // top: 110,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 520,
    width: '100%',
    backgroundColor: '#ffffff',
    
   
  },
  text: {
    color: '#000000',
    marginVertical:'5%',
    fontSize:16,
    fontWeight: 'bold',
  },
});
export default ForgotPass;
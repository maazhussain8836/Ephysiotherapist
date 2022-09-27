import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Image11 from '../assets/images/ef2.webp';
import CustomInputs from '../components/CustomInputs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import CustomButtons from '../components/CustomButtons';



const Verification = ({navigation}) => {
  // const [OTP, setOTP] = useState("");
  return (
    
    <View style={{display:'flex',justifyContent:'center',flex:1,flexDirection:'column',backgroundColor:'#FFF',opacity:1}}>
      <SafeAreaView>
        {/* <Image source={Image11} style={styles.loginImage} /> */}
        <ImageBackground source={Image11} resizeMode="contain" style={styles.loginImage}>
          <View style={{width:"100%",height:"100%",backgroundColor:'#FFF',opacity:0.4}}>
          </View>
        
        </ImageBackground>
        <View style={{...styles.backgroundView}}>
        <Image
              source={require('../assets/images/logoP4.png')}
              style={{width: '100%', height: '25%', resizeMode: 'contain'}}
            />
          <View style={{padding:20,position:'relative'}}>
            <Text style={{...styles.text,textAlign:'center'}}>Check Your Email</Text>
            <Text style={{...styles.text,textAlign:'center',color:'#c2c2c2',marginTop:'-4%'}}>E-Physio has sent a code
             to verify the </Text>
             <Text style={{...styles.text,textAlign:'center',color:'#c2c2c2',marginTop:'-4%'}}> forgotten Password</Text>
          </View>
          
          <View style={{width:'80%',height:60,marginLeft:'auto',marginRight:'auto'}}>
          
          </View>
          
          <View style={{marginVertical:'4%'}}>
            <Pressable onPress={()=>{navigation.navigate('Diet')}}>
            {/* button Login */}
            <CustomButtons  text={'Verification'}/>
            </Pressable>
          </View>
          <View style={{display:'flex',
           flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
              <TouchableOpacity>
              <Text style={{...styles.text,color:'#000000',fontSize:15}}> Resend: <Text style={{color:'#e6b257',fontWeight:'bold'}}></Text> </Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: "100%",
    height: 380,
    // resizeMode: 'contain',
    opacity: 10,
    backgroundColor: '#FFF',
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  },

  borderStyleHighLighted: {
    borderColor: "#FFF",
  },

 
  underlineStyleBase: {
    width: 50,
    height: 50,
    color:'red',
    borderWidth: 2,
    
    
  },
  backgroundView: {
    top: -80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 495,
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
export default Verification;
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

import React, {useState} from 'react';
import Image11 from '../assets/images/2.png';
import CustomInputs from '../components/CustomInputs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import CustomButtons from '../components/CustomButtons';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verification = ({navigation}) => {
  
  const [email, setemail] = '';
  const onPressLogin = () => {
    navigation.navigate('Diet');
  };

  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          flexDirection: 'column',
          backgroundColor: '#FFF',
          opacity: 1,
        }}>
        <SafeAreaView>
          {/* <Image source={Image11} style={styles.loginImage} /> */}
          {/* <ImageBackground
            source={Image11}
            resizeMode="contain"
            style={styles.loginImage}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                opacity: 0.7,
              }}></View>
          </ImageBackground> */}
          <View style={{...styles.backgroundView}}>
            <Image
              source={require('../assets/images/physiog2.jpg')}
              style={{width: '100%', height: '18%', resizeMode: 'contain'}}
            />
    
    <View style={{padding: 20, position: 'relative'}}>
              <Text style={{...styles.text,marginBottom:'5%'}}>Hey,{'\n'}Check Your Email,</Text>
              <View>
                <Text
                  style={{
                    ...styles.text,
                    color: '#D3D3D3',
                    textAlign:'center',
                    fontSize: 15,
                    marginBottom:'8%'
                  }}>
                  E-Physio has sent a code to verify the forgotten Password
                </Text>
            </View>
              <Icon
                size={24}
                color="#40E0D0"
                name="account"
                style={{position: 'absolute', top: 192, left: 29,zIndex:1}}
              />
              <CustomInputs
                placeholder={'Email'}
                secureTextEntry={false}
                value={email}
                setValue={setemail}
              />
            
            <OTPInputView
            pinCount={4}
            autoFocusOnLoad={false}
            
            style={{
              marginTop:'18%',
              height: '3%',
              width:'10%',
              borderColor: '#808080',
              marginLeft: '4%',
              // marginRight: 'auto',
              
            }}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            placeholderTextColor='#000'
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
            </View>
      
      
            <View>
              {/* button Login */}
              <Pressable onPress={onPressLogin}>
                <CustomButtons text={'VERIFICATION'} />
              </Pressable>
            </View>
   
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: '100%',
    height: 250,
    // resizeMode: 'contain',
    opacity: 1,
    // backgroundColor: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundView: {
    top: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 700,
    width: '100%',
    backgroundColor: '#FFF',
  },
  text: {
    color: '#40E0D0',
    // marginVertical: '5%',
    // marginBottom: '3%',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical:'3%'
  },
  underlineStyleBase: {
    width: 70,
    height: 50,
    alignItems:'center',
    borderWidth: 3,
    borderRightWidth: 1,
    fontSize:20,
    color:'#000',
    marginVertical:'12%'
  },
  underlineStyleHighLighted: {
    borderColor: 'gray',
  },
});
export default Verification;

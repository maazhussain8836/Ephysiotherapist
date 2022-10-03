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

const Login = ({navigation}) => {
  const [Username, setUsername] = '';
  const [Password, setPassword] = '';
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
              <Text style={{...styles.text,marginBottom:'13%'}}>Hey,{'\n'}Login Now,</Text>
              <Icon
                size={24}
                color="#40E0D0"
                name="account"
                style={{position: 'absolute', top: 145, left: 29,zIndex:1}}
              />
              <CustomInputs
                placeholder={'Username'}
                secureTextEntry={false}
                value={Username}
                setValue={setUsername}
              />
            </View>
            <View style={{padding: 20, position: 'relative'}}>
              {/* <Text style={styles.text}>Password</Text> */}
              <IconOct
                size={20}
                color="#40E0D0"
                name="lock"
                style={{position: 'absolute', top: 35, left: 35,zIndex:1}}
              />
              <CustomInputs
                placeholder={'Password'}
                secureTextEntry={true}
                value={Password}
                setValue={setPassword}
              />
              <Icon
                size={24}
                color="#40E0D0"
                name="eye-outline"
                style={{position: 'absolute', top: 35, right: 30}}
              />
            </View>
      
            <View>
              {/* button Login */}
              <Pressable onPress={onPressLogin}>
                <CustomButtons text={'LOGIN'} />
              </Pressable>
            </View>
            <View
              style={{
                display: 'flex',
                
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    ...styles.text,
                    color: '#145D94',
                    textAlign:'center',
                    fontSize: 15,
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text style={{...styles.text, color: '#606060', fontSize: 15}}>
                  Don't have account?{' '}
                  <Text style={{color: '#40E0D0', fontWeight: 'bold'}}>
                    Register
                  </Text>{' '}
                </Text>
              </TouchableOpacity>
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
});
export default Login;

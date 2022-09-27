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
          flexDirection: 'column',
          backgroundColor: '#FFF',
          opacity: 1,
        }}>
        <SafeAreaView>
          {/* <Image source={Image11} style={styles.loginImage} /> */}
          <ImageBackground
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
          </ImageBackground>
          <View style={{...styles.backgroundView}}>
            <Image
              source={require('../assets/images/logoP4.png')}
              style={{width: '100%', height: '20%', resizeMode: 'contain'}}
            />
            <View style={{padding: 20, position: 'relative'}}>
              <Text style={styles.text}>Username</Text>
              <Icon
                size={24}
                color="#113255"
                name="account"
                style={{position: 'absolute', top: 90, left: 23}}
              />
              <CustomInputs
                placeholder={'Username'}
                secureTextEntry={false}
                value={Username}
                setValue={setUsername}
              />
            </View>
            <View style={{padding: 20, position: 'relative'}}>
              <Text style={styles.text}>Password</Text>
              <IconOct
                size={20}
                color="#113255"
                name="lock"
                style={{position: 'absolute', top: 90, left: 26}}
              />
              <CustomInputs
                placeholder={'Password'}
                secureTextEntry={true}
                value={Password}
                setValue={setPassword}
              />
              <Icon
                size={24}
                color="#113255"
                name="eye-outline"
                style={{position: 'absolute', top: 90, left: 343}}
              />
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
                    color: '#606060',
                    marginLeft: '5%',
                    fontSize: 15,
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              {/* button Login */}
              <Pressable onPress={onPressLogin}>
                <CustomButtons text={'Login'} />
              </Pressable>
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
                  <Text style={{color: '#e6b257', fontWeight: 'bold'}}>
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
    top: -40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 700,
    width: '100%',
    backgroundColor: '#FFF',
  },
  text: {
    color: '#000',
    marginVertical: '5%',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Login;

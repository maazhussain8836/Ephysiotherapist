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
import Image11 from '../assets/images/demo.webp';
import CustomInputs from '../components/CustomInputs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import CustomButtons from '../components/CustomButtons';
const Register = ({navigation}) => {
  const [Username, setUsername] = '';
  const [Email, setEmail] = '';
  const [Password, setPassword] = '';

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
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
              backgroundColor: '#FFFFFF',
              opacity: 0.4,
              position: 'absolute',
            }}></View>
        
        </ImageBackground>
        
        <View style={{...styles.backgroundView}}>
        <Image
              source={require('../assets/images/logoP4.png')}
              style={{width: '100%', height: '25%', resizeMode: 'contain'}}
            />
          <View style={{padding: 20, position: 'relative'}}>
            <Text style={styles.text}>Username</Text>
            <Icon
              size={24}
              color="#113255"
              name="account-outline"
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
            <Text style={styles.text}>Email</Text>
            <Icon
              size={22}
              color="#113255"
              name="email-outline"
              style={{position: 'absolute', top: 90, left: 26}}
            />
            <CustomInputs
              placeholder={'Email'}
              secureTextEntry={false}
              value={Email}
              setValue={setEmail}
            />
          </View>
          <View style={{padding: 20, position: 'relative', marginBottom: 20}}>
            <Text style={styles.text}>Password</Text>
            <IconOct
              size={20}
              color="#113255"
              name="lock"
              style={{position: 'absolute', top: 90, left: 26}}
            />
            <CustomInputs
              placeholder={'Password'}
              secureTextEntry={false}
              value={Password}
              setValue={setPassword}
            />
            <Icon
              size={24}
              color="#113255"
              name="eye-off-outline"
              style={{position: 'absolute', top: 90, left: 343}}
            />
          </View>

          <View>
            <Pressable onPress={()=>{navigation.navigate('ForgotPass')}}>
            {/* button Login */}
            <CustomButtons text={'Register'} />
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
              <Text style={{...styles.text, color: '#606060', fontSize: 15}}>
                {' '}
                Have an Account?{' '}
                <Text style={{color: '#e6b257', fontWeight: 'bold'}}>
                  Login
                </Text>{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: '100%',
    height: 350,
    // resizeMode: 'contain',
    opacity: 10,
    backgroundColor: '#418681',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundView: {
    top: -150,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 550,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
    marginVertical: '5%',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Register;

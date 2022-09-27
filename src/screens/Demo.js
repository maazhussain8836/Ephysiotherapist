import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Demo = ({navigation}) => {
  const onPressDemo=()=>{
    navigation.navigate('Camera')
  }
  return (
    <View style={style.viewBackground}>
      <View style={{...style.imgView, height: '35%'}}>
      <View style={{...style.imgView, position: 'relative'}}>
        <Text style={{...style.textStyle,fontSize:25,color:'#113255'}}> Would You Like To See Demo To Start Therapy ?</Text>
   
      </View>
        <Image
          source={require('../assets/images/demo.webp')}
          style={style.imgHeader}
        />
      </View>
      
 
      <View
        style={{
          marginTop:'45%',
          backgroundColor: '#113255',
          height: '7%',
          width: '45%',
          marginLeft: 'auto',
          marginRight:'auto',
        //   paddingLeft:'27%',
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        //   padding: '2%',
        
        }}>
          <TouchableOpacity onPress={onPressDemo}>
        <Text
          style={style.textStyle}>
          START DEMO
        </Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

export default Demo;
const style = StyleSheet.create({
  viewBackground: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  imgView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15%',
  },
  imgHeader: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:'10%'
  },
});

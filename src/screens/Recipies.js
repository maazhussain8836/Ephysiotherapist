import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Recipies = ({navigation}) => {
  const onPressLevel=()=>{
      navigation.navigate('Demo')
  }
  return (
    <View style={style.viewBackground}>
      <View style={{...style.imgView, height: '35%'}}>
        <Image
          source={require('../assets/images/physio.jpg')}
          style={style.imgHeader}
        />
      </View>
      <View style={{...style.imgView, position: 'relative',marginTop:'5%'}}>
        <Text style={{...style.textStyle,fontSize:25,color:'#113255'}}>How Would You Like To Start ?</Text>
      
      </View>
      <View style={{flex:1}}>
        <TouchableOpacity onPress={onPressLevel}>
      <View
        style={style.levelStyle}>
        <Text
          style={style.textStyle}>
          Beginner
        </Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressLevel}>
      <View
        style={style.levelStyle}>
        <Text
          style={style.textStyle}>
          Average
        </Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressLevel}>
      <View
        style={style.levelStyle}>
        <Text
          style={style.textStyle}>
          Athelete
        </Text>
      </View>
      </TouchableOpacity>

      </View>
    </View>
  );
};

export default Recipies;
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
    marginBottom:'5%'
  },
  imgHeader: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: '600',
    textAlign:'center'
  },
  levelStyle:{
    borderWidth:2,
    width:'80%',
    paddingTop:10,
    paddingVertical:10,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:50,
    marginVertical:10,
    backgroundColor:'#113255'

  }
});

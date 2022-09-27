import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInputs = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <>
    <View style={{position:'relative'}}>
    
      <TextInput style={style.inpurText}
     
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={setValue}>
      </TextInput>
    </View>
    </>
  )
}
const style=StyleSheet.create({
    inpurText:{
        opacity:0.7,
        borderWidth:1,
        // marginBottom:'2%',
        borderColor:'#c2c2c2',
        paddingHorizontal:7,
        // width:370,
        // marginLeft:10,
        paddingLeft:40,
        marginBottom:-30,
        


    }
})
export default CustomInputs
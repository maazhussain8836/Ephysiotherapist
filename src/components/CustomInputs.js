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
        // borderWidth:2,
        backgroundColor:'#E6E6E3',
        marginBottom:'-3%',
        borderColor:'#c2c2c2',
        paddingHorizontal:17,
        // width:370,
        // marginLeft:10,
        borderRadius:30,
        paddingLeft:40,
        // marginBottom:-30,
        


    }
})
export default CustomInputs
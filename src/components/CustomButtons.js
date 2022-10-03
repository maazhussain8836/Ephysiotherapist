import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const CustomButtons = ({text}) => {
  return (
    <View style={style.btnView}>
      <TouchableOpacity>
        <LinearGradient
          colors={['#40E0D0', '#145D94', '#AFEEEE']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={style.btnView}>
          <Text style={style.btntext}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  btnView: {
    // marginTop:'6%',
    padding: 10,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
    marginVertical: '1%',
  },
  btntext: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 17,
  },
});
export default CustomButtons;

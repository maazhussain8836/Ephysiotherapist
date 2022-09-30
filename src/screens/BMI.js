import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustomButtons from '../components/CustomButtons';
const BMI = () => {
  const [Age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const bmiGenerator = () => {
    console.log(Age, ' ', gender, ' ', weight, ' ', height, 'BMI is :',bmi, 'Your Message is:',message);
    setGender(gender);
    setWeight(weight);
    setAge(Age);
    setHeight(height);
    
    setGender(null);
    setWeight(null);
    setAge(null);
    setHeight(null);
  };

  let calcBmi = (event) => {
    //prevent submitting to the server
    // event.preventDefault()
 
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
 
      // Logic for message
 
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
    console.log('BMI is :',bmi, 'Your Message is:',message);
  }

 
 
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View>
        <Text style={{...styles.textStyle, fontSize: 25, color: '#113255'}}>
          {' '}
          BMI Calculator
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/images/bmi2.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top:-100,
            opacity: 0.5,
            height: moderateScale(370, 0.1),
            width: moderateScale(370, 0.1),
          }}
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <View style={{width: '40%'}}>
          <Text style={{color: '#113255', fontSize: 20, fontWeight: '600'}}>
            Age
          </Text>
          <TextInput
          keyboardType='numeric'
            style={styles.txtInput}
            value={Age}
            onChangeText={e => setAge(e)}
          />
        </View>

        <View style={{width: '40%'}}>
          <Text style={{color: '#113255', fontSize: 20, fontWeight: '600'}}>
            Gender
          </Text>
          <TextInput
            style={styles.txtInput}
            value={gender}
            onChangeText={e => setGender(e)}
          />
        </View>
        <View style={{width: '40%'}}>
          <Text style={{color: '#113255', fontSize: 20, fontWeight: '600'}}>
            Height (ft)
          </Text>
          <TextInput
            style={styles.txtInput}
            value={weight}
            keyboardType='numeric'
            onChangeText={e => setWeight(e)}
          />
        </View>
        <View style={{width: '40%'}}>
          <Text style={{color: '#113255', fontSize: 20, fontWeight: '600'}}>
            Weight
          </Text>
          <TextInput
            style={styles.txtInput}
            value={height}
            keyboardType='numeric'
            onChangeText={e => setHeight(e)}
          />
        </View>
      </View>

      <View style={{marginVertical: '6%'}}>
        <Pressable onPress={calcBmi}>
          <CustomButtons text={'Calculate BMI'} />
        </Pressable>
      </View>
      <View>
        
        {/* <Text>{Age},{gender},{weight},{height}</Text> */}
        
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/images/BMI.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            opacity: 0.8,
            height: moderateScale(280, 0.1),
            width: moderateScale(280, 0.1),
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txtInput: {
    borderWidth: 1,
    textAlign:'center',
    // paddingHorizontal:'13%',
    marginVertical: '5%',
    // width:'80%',
  },
  textStyle: {
    fontSize: 17,

    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: '3%',
  },
});
export default BMI;

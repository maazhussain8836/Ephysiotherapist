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
import IconEntopy from 'react-native-vector-icons/Entypo';
const BMI = () => {
  const [Age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState('');

  // const bmiGenerator = () => {
  //   console.log(Age, ' ', gender, ' ', weight, ' ', height, 'BMI is :',bmi, 'Your Message is:',message);

  // };

  let calcBmi = () => {
    //prevent submitting to the server
    // event.preventDefault()

    if (weight == null || height == null) {
      alert('Please enter a valid weight and height');
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi);
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi <= 18.5) {
        setMessage(`BMI : ${bmi.toFixed(1)}   'UNDERWEIGHT'`);
      } else if (bmi > 18.5 && bmi <= 22.9) {
        setMessage(`BMI : ${bmi.toFixed(1)}   'NORMAL'`);
      } else if (bmi >= 23 && bmi <= 24.9) {
        setMessage(`BMI : ${bmi.toFixed(1)}   'OVERWEIGHT'`);
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMessage(`BMI : ${bmi.toFixed(1)}   'PRE-OBESE'`);
      } else {
        setMessage(`BMI : ${bmi.toFixed(1)}   'OBESE'`);
      }
    }
    setGender(gender);
    setWeight(weight);
    setAge(Age);
    setHeight(height);
    setGender(null);
    setWeight(null);
    setAge(null);
    setHeight(null);

    console.log(
      'Age is :',
      Age,
      'Your Gender is :',
      gender,
      'BMI is :',
      bmi,
      'Your Message is:',
      message,
    );
  };

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
            top: -100,
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
            keyboardType="numeric"
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
            value={height}
            keyboardType="numeric"
            onChangeText={e => setHeight(e)}
          />
        </View>
        <View style={{width: '40%'}}>
          <Text style={{color: '#113255', fontSize: 20, fontWeight: '600'}}>
            Weight
          </Text>
          <TextInput
            style={styles.txtInput}
            value={weight}
            keyboardType="numeric"
            onChangeText={e => setWeight(e)}
          />
        </View>
      </View>

      <View style={{marginVertical: '6%'}}>
        <Pressable onPress={calcBmi}>
          <CustomButtons text={'Calculate BMI'} />
        </Pressable>
      </View>
      <View>
        {/* <Text>BMI :{bmi} </Text> */}
        {/* <Text style={{color:'#30D5C8',fontSize:24,textAlign:'center',marginVertical:'2%'}}>{message}</Text> */}
        <IconEntopy
          size={45}
          color="#113255"
          name="arrow-bold-right"
          style={[
            {position: 'absolute'},
              bmi <= 18.5
              ? styles.underWeight
              : bmi > 18.5 && bmi <= 22.9
              ? styles.normal
              : bmi >= 23 && bmi <= 24.9
              ? styles.overWeight
              : bmi >= 25 && bmi <= 29.9
              ? styles.preObese
              : {display:'none'}
          ]}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/images/BMI.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            opacity: 0.8,
            height: moderateScale(340, 0.1),
            width: moderateScale(340, 0.1),
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txtInput: {
    borderWidth: 1,
    textAlign: 'center',
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
  obese: {
    top: 150,
    left: 130,
    transform: [{rotate: '210deg'}],
  },
  underWeight: {
    top: 130,
    left: 170,
    transform: [{rotate: '270deg'}],
  },
  normal: {
    top: 150,
    left: 212,
    transform: [{rotate: '340deg'}],
  },
  overWeight: {
    top: 194,
    left: 198,
    transform: [{rotate: '39deg'}],
  },
  preObese: {
    top: 194,
    left: 140,
    transform: [{rotate: '135deg'}],
  },
});
export default BMI;

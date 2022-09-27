import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
const slides = [
  {
    key: 'one',
    title: ' WELCOME TO E-PHYSIOTHERAPIST',
    text: 'ELIMINATING OR REDUCING PAIN',
    image: require('../assets/images/slider1.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 'two',
    title: 'PROVIDING REAL TIME SYNCHRONIZATION',
    text: 'IMPROVING OVERALL STRENGTH AND COORDINATION',
    image: require('../assets/images/slider4.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 'three',
    title: 'MAKE YOUR BODY FIT AND HEALTHY',
    text: 'REDUCING THE DEPENDENCY ON MEDICINES',
    image: require('../assets/images/slider3.png'),
    backgroundColor: '#FFFFFF',
  },
];

// const renderNextButton = () => {
//   return (
//     <>
//       <View

//       style={{borderRadius:12 , marginTop:-30 }}
//       >
//         <Text style={{textAlign:'center',
//         fontSize: 16,
//          fontFamily: 'Poppins-Regular',
//          width:133,
//          height:50 ,
//          paddingTop:14 ,
//          color:'#808080',}}>
//           Next
//         </Text>
//       </View>
//     </>
//   );
// }

const Slider = ({navigation}) => {
  const renderDoneButton = () => {
       
    return (
      <>
        <View style={{borderRadius: 12, marginTop: -30}}>
          <Pressable onPress={onDone}>
          {/* <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              width: 133,
              height: 50,
              paddingTop: 12,
              color: '#0F2B49',
            }}>
            Finish
          </Text> */}
          <Ionicons name='checkmark-done-circle' size={32} color={'#0D2B49'}/>
          </Pressable>
        </View>
      </>
    );
  };


  const onDone = () => {
    navigation.navigate('Login');
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 20,
        }}>
        <View
          style={{
            top: -40,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: 500,
            width: '100%',
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.introImageStyle} source={item.image} />
        </View>

        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      activeDotStyle={{backgroundColor: '#0F2B49', marginBottom: 150}}
      dotStyle={{backgroundColor: '#8080EF', marginBottom: 150}}
      nextLabel="Next"
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      // onSkip={onSkip}
      // renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      // renderSkipButton={renderSkipButton}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 6,
  },
  introImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    // borderWidth:3,
    // borderRadius:'50%'
  },
  introTextStyle: {
    fontSize: 17,
    color: '#8B8B8B',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Gazpacho' : 'Gazpacho Regular',
    top: -80,
  },
  introTitleStyle: {
    top: -45,
    fontSize: 24,
    color: '#0D2B49',
    fontWeight: 'bold',
    textAlign: 'center',

    fontFamily: Platform.OS === 'ios' ? 'Gazpacho' : 'Gazpacho Regular',
  },
});

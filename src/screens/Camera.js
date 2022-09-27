import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {launchCamera} from 'react-native-image-picker';
const Camera = () => {
  // const [video, setVideo] = useState();


  const openCam=()=>{
    launchCamera({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
      saveToPhotos: true,
      mediaType:'video',
      videoQuality:'high'
    })
      .then(video => {
        console.log(video.assets[0].uri)
      
      })
      .catch(error => {
        console.log(error)
      });
  }
  return (
    <View style={style.viewBackground}>
      <View style={{...style.imgView, height: '35%'}}>
        <View style={{...style.imgView, position: 'relative'}}>
          <Text style={{...style.textStyle, fontSize: 25, color: '#113255'}}>
            Click To Play a Demo For Therapy
          </Text>
        </View>
        <Image
          source={require('../assets/images/demo2.webp')}
          style={style.imgHeader}
        />
        <FontAwesome5
          name="play"
          size={40}
          color="#424D4F"
          style={{
            position: 'absolute',
            top: 260,
            left: 170,
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </View>

      <View
        style={{
          marginTop: '55%',
          backgroundColor: '#113255',
          height: '8%',
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
          //   paddingLeft:'27%',
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          //   padding: '2%',
        }}>
        <TouchableOpacity onPress={openCam}>
          <Text style={style.textStyle}>START THERAPY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Camera;
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
    opacity: 0.5,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '8%',
  },
});

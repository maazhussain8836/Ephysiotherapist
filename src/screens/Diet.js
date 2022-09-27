import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {dietImages} from '../components/DietImages';

const Diet = ({navigation}) => {
  const [items, setItems] = useState(dietImages);

  const onPressElbow=()=>{
      navigation.navigate('Recipies')
  }
  return (
    <>
      <View style={{backgroundColor: '#F7F5C9 ', flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: 20,
            top: 30,
            color: '#FFF',
            borderWidth:2,
            paddingVertical:'3%',
            width:'95%',
            marginLeft:'auto',
            marginRight:'auto',
            borderRadius:10,
            backgroundColor:'#113255'

          }}>
          CHOOSE YOUR MUSCLE FOR THERAPY
        </Text>
        <FlatGrid
          itemDimension={150}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={30}
          renderItem={({item}) => (
            <>
              <View style={[styles.itemContainer]}>
                <TouchableOpacity onPress={onPressElbow}>
                  <Image
                    style={{
                      width: 140,
                      height: 90,
                      resizeMode: 'contain',
                      borderRadius: 10,
                    }}
                    source={item.img}
                  />

                  <Text style={styles.itemName}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: '8%',
    flex: 1,
    // borderWidth: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderColor: '#F7F5C9 ',
    backgroundColor: '#F7F5C9 ',
    shadowColor: '#F7F5C9',
    shadowOpacity: 1,
    shadowOffset: {width: 15, height: 22},
    shadowRadius: 10,
    elevation: 18,
    // position:'absolute',
    // zIndex:1
  },
  itemContainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 18,
    marginVertical:10,
    padding: 10,
    height: 110,
    width: '100%',

    backgroundColor: '#c2c2c2',
  },
  itemName: {
    marginTop: '13%',
    fontSize: 15,
    color: '#113255',
    textAlign: 'center',
    fontWeight: '600',
  },
});
export default Diet;

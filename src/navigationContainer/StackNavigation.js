import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Diet from '../screens/Diet'
import Recipies from '../screens/Recipies'
import Slider from '../screens/Slider'
import Demo from '../screens/Demo'
import Camera from '../screens/Camera'
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPass from '../screens/ForgotPass';
import Verification from '../screens/Verification';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Diet" component={Diet} />
      <Stack.Screen name="Recipies" component={Recipies} />
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation
import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from '../04-navegacionApp/src/navigator/Navigator'




export default function App() {
  return (
    <NavigationContainer>
      
      <MyStack></MyStack>
    </NavigationContainer>
  );
}
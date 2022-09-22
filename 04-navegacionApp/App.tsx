import 'react-native-gesture-handler';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from '../04-navegacionApp/src/navigator/Navigator'
import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralNum2 } from './src/navigator/MenuLateralnum2';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContex';




export default function App() {
  return (
    <NavigationContainer>
      <AppState>
      {/* <MyStack></MyStack> */}
      {/* <MenuLateral></MenuLateral> */}
      <MenuLateralNum2></MenuLateralNum2>
      {/* <Tabs></Tabs> */}
      </AppState>
    </NavigationContainer>
  );
}

const AppState =({ children }: any)=>{
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}
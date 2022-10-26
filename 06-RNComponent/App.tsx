import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { DefaultTheme, NavigationContainer , DarkTheme, Theme} from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';

const customTheme : Theme ={
  dark:true,
  colors:{
    ...DefaultTheme.colors,
    
    // primary: string;
    // background: string;
    // card: string;
    // text: string;
    // border: string;
    // notification: string;
  }
}

const App = () => {
  return (
    <NavigationContainer
    theme={customTheme}
    >
    <Navigator />
    </NavigationContainer>
  )
}
 export default App
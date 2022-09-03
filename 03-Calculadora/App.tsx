import React from 'react'
import { SafeAreaView } from 'react-native'
import CalculadorScreen from './src/screens/CalculadorScreen';
import { styles } from './src/theme/Themeapp';

export default function App() {
  return (
    <SafeAreaView style={ styles.fondo }>
    <CalculadorScreen></CalculadorScreen>
    </SafeAreaView>
  )
}

import React from 'react'
import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { ContadorScreen } from './src/screens/ContadorScreen';
import {  BoxObjectScreen } from './src/screens/BoxObjectScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';


export const App = () => {
  
  return (
    <SafeAreaView style={{ flex:1 }}>
    {/* // <HolaMundoScreen></HolaMundoScreen>
    // <ContadorScreen></ContadorScreen> */}
    {/* <BoxObjectScreen></BoxObjectScreen> */}
    {/* <DimensionesScreen></DimensionesScreen> */}
    {/* <PositionScreen></PositionScreen> */}
    {/* <FlexScreen></FlexScreen> */}
    <TareaScreen></TareaScreen>
    </SafeAreaView>
  )
}



import React from 'react'
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


interface Props{
    children:JSX.Element|JSX.Element[]
}
export const Background = ({children }:Props) => {
  return (
    <View style={{flex:1,}}>
        <LinearGradient
        colors={['#084f6a','#75cedb','white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0.1,y:0.2}}
        end={{x:0.5,y:0.8}}
        />
        {children}
    </View>

  )
}

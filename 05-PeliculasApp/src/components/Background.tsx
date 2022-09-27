import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { GradientContex } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';


interface Props{
    children:JSX.Element|JSX.Element[]
}
export const Background = ({children }:Props) => {

  const { color,prevcolor,setMainPrevColor} = useContext(GradientContex)

  const {fadeIn,opacity, fadeOut }=useFade()

  useEffect(() => {
    fadeIn( ()=>{
      setMainPrevColor(color)
      fadeOut(0)
    } )
  }, [color])
  

  return (
    <View style={{flex:1,}}>
        <LinearGradient
        colors={[prevcolor.primary,prevcolor.secondary,'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0.1,y:0.2}}
        end={{x:0.5,y:0.8}}
        />
        <Animated.View
          style={{...StyleSheet.absoluteFillObject,opacity}}
        >
           <LinearGradient
        colors={[color.primary,color.secondary,'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0.1,y:0.2}}
        end={{x:0.5,y:0.8}}
        />
        </Animated.View>
        {children}
    </View>

  )
}

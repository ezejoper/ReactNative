import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const{ fadeIn , fadeOut, opacity } = useFade()


  return (
    <View 
    style={{
    backgroundColor:'grey',
    flex:1,
    justifyContent:'center'    ,
    alignItems:'center'
    }}
    
    >
        <Animated.View
        style={{
            backgroundColor:'#084f6a',
            width:150,
            height:150,
            borderColor:'white',
            borderWidth:10,
            opacity:opacity,
            marginBottom:10
        }}
        />

        <Button
            title='FadeIn'
            onPress={()=>fadeIn}
        />
        <Button
            title='FadeOut'
            onPress={()=>fadeOut}
        />
    </View>
  )
}

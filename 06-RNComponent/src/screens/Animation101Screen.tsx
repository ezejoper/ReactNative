import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';

export const Animation101Screen = () => {
  const opacity= useRef(new Animated.Value(0)).current

  const top=useRef(new Animated.Value(-100)).current


  const fadeIn= ()=>{
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration:300,
        useNativeDriver:true //hace qe la animacion sea por hardwarrwe
      }
    ).start( ()=>console.log('animacion terminada')) //siempre se coloca para que comience la animacion

    Animated.timing(
      top,
      {
        toValue:0,
        duration:900,
        useNativeDriver:true,
        easing: Easing.bounce
      }
    ).start()
  }
  const fadeOut= ()=>{
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration:300,
        useNativeDriver:true //hace qe la animacion sea por hardwarrwe
      }
    ).start() //siempre se coloca para que comience la animacion

    Animated.timing(
      top,
      {
        toValue:-100,
        duration:900,
        useNativeDriver:true,
        easing: Easing.bounce
      }
    ).start()
  }
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox,
        opacity:opacity,
        marginBottom:20,
        transform:[{
          translateY:top
        }]
        }} />
        <Button
        title='fadeIn'
        onPress={fadeIn}
        />
        <Button
        title='fadeOut'
        onPress={fadeOut}
        />
        
    </View>

  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'

    },
    purpleBox:{
        backgroundColor:'#5856d6',
        width:150,
        height:150
    }

});


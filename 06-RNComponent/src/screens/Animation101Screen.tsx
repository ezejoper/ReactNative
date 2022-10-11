import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const {fadeIn,fadeOut,opacity,positionStart,position}=useAnimation()
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox,
        opacity:opacity,
        marginBottom:20,
        transform:[{
          translateX:position
        }]
        }} />
        <Button
        title='fadeIn'
        onPress={()=>{
          fadeIn(),
          positionStart(100)
        }}
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


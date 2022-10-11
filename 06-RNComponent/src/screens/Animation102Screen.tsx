import React from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation102Screen = () => {
     const{ cursorMove, cursorMoveResp}= useAnimation()

    return (
        <View style={styles.container}>
          <Animated.View 
          {...cursorMoveResp.panHandlers}
          style={[styles.purpleBox, cursorMove.getLayout()]} />
        </View>
      )
    }
    const styles = StyleSheet.create({
        container:{
          justifyContent:'center',
          alignItems:'center',
          flex:1
        },
        purpleBox:{
            backgroundColor:'#75cedb',
            width:150,
            height:150,
            borderRadius:10
        }
    
    });

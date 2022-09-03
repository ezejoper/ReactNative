import React from 'react'
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>

        <View style={ styles.cajaMorada } />
        <View style={ styles.cajaNaranja } />
        <View style={ styles.cajaVerde } />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // height:400,
        // width:400,
        backgroundColor:'#28C4D9',
        // alignItems:'center',
        // justifyContent:'center'
    },
    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856d6',
        borderWidth: 10,
        borderColor:'white',
        position:'absolute',
        top:0,
        right:0
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth: 10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        right:0
        
    },
    cajaVerde:{
        backgroundColor:'green',
        // width:100,
        // height:100,
        borderWidth: 10,
        borderColor:'white',
        // position:'absolute',
        // bottom:0,
        // left:0,
        // top:0,
        // right:0
        ...StyleSheet.absoluteFillObject
    }
});
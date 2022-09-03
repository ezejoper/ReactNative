import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Dimensions } from 'react-native';

export const DimensionesScreen = () => {
    const { width, height }= useWindowDimensions()
return (<View>
    <View style= { styles.container}>
        <View style= { {
        ...styles.cajaMorada,
        width:width * 0.20
    }}/>
        <View style= { styles.cajaNaranja }/>
        
    </View>
    <Text>
    H:{Math.round(height)} W:{Math.round(width)}
</Text>
</View>
)
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:500,
        backgroundColor:'red'
    },
    cajaMorada:{
        backgroundColor:'#5856d6',
        width:'100%',
        height:'100%'
    },
    cajaNaranja:{
        backgroundColor:'orange'
    }
});
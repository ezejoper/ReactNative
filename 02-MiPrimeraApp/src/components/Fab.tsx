import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string
    onPress: () => void
    position?: 'bright' | 'bleft'
}


export const Fab = ( { title, onPress, position = 'bright'} : Props ) => {

    console.log(title)
    return (
        <View
        style={ [styles.fabLocation, 
            (position === 'bleft' ) ? styles.left : styles.right]}
        >
        <TouchableNativeFeedback
            background={ TouchableNativeFeedback.Ripple( 'blue',false, 30) }
            onPress={ onPress }
        >
        <View style={ styles.fab }>
        <Text style={ styles.fabText}>{title}</Text>
        </View>
        </TouchableNativeFeedback>
        </View>
    
    )
}

const styles= StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:25,
        borderRadius:1000
    },
    right:{
        right:25
    },
    left:{
        left:25
    },
    fab:{
        backgroundColor:'#5856D6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 8,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf:'center'
    }
})
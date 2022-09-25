
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenHeight=Dimensions.get('screen').height
export const DetailScreen= ({route}:Props) => {
  const movie=route.params
  const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
 
 
  return (
    <ScrollView>
    <View style={styles.imageContainer}>
      <Image
      source={{uri }}
      style={styles.poster}
      />
    </View>
    <View style={styles.marginContainer}>
      <Text style={styles.subTitle}>{movie.original_title}</Text>
      <Text style={styles.title}>{movie.title}</Text>
    </View>
    <View style={styles.marginContainer}>
      <Icon
      name='star-outline'
      color='grey'
      size={20}
      />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    poster:{
      flex:1,
      
    },
    imageContainer:{
      width:'100%',
      height:screenHeight * 0.7,
      shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
borderBottomEndRadius:25,
borderBottomStartRadius:25,
overflow:'hidden'

    },
    marginContainer:{
      marginHorizontal:20,
      marginTop:20
    },
    subTitle:{
      fontSize:14,
      color:'black',
      opacity:0.5
    },
    title:{
      fontSize:20,
      color:'black',
      fontWeight:'bold'
    }
});
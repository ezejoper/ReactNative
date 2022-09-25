import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interface/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props{
    movie: Movie;
    height?:number;
    width?:number
}


export const PosterMovie = ({ movie, height = 420,width = 300 }:Props) => {
    const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const navigation= useNavigation()

    return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('DetailScreen',movie)}
    activeOpacity={0.9}
    style={{
        width,
        height,
        marginHorizontal:2,
        paddingBottom:20,
        paddingHorizontal:5
    }}>
        <View style={styles.imageContainer}>
        <Image
            source={{ uri }}
            style={styles.image}
        />
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:16,
        
        

    },
    imageContainer:{
        flex:1,
        borderRadius:12,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6,

elevation: 10,
    }
});

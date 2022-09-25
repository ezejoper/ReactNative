import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interface/movieInterface';

interface Props{
    movie: Movie;
    height?:number;
    width?:number
}


export const PosterMovie = ({ movie, height = 420,width = 300 }:Props) => {
    const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
    <View style={{
        width,
        height,
        marginHorizontal:7
    }}>
        <View style={styles.imageContainer}>
        <Image
            source={{ uri }}
            style={styles.image}
        />
        </View>
    </View>
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

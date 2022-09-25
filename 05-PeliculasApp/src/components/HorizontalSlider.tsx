import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interface/movieInterface'
import { PosterMovie } from './PosterMovie'

interface Props{
    title?:string
    movies:Movie[]
}

export const HorizontalSlider = ({movies,title}:Props) => {
  return (
    <View style={{ 
        height: title ? 260 : 220
        }}>
    { title && <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginLeft:10}}>{title}</Text>}
    <FlatList
        data={movies}
        renderItem={ ( {item} : any )=>
        <PosterMovie
        width={140}
        height={200}
        movie={item }/> }
        keyExtractor={ (item=> item.id.toString()) }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    />
</View>
  )
}

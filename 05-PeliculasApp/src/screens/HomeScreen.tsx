
import React from 'react'
import {  View , ActivityIndicator, Dimensions, FlatList, Text, ScrollView} from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { PosterMovie } from '../components/PosterMovie';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const widthWindow = Dimensions.get('window').width

export const HomeScreen = ( ) => {


const { peliculasEstreno, isLoading } = useMovies()

if (isLoading) {
    return(
        <View style={{flex:1,justifyContent:'center', alignContent:'center'}}>
            <ActivityIndicator color='red' size={ 100 } />
        </View>
    )
}


return (
    <ScrollView>
    <View style={{marginTop:20}}>
    <View style={{height:440}}>  
    {/* Carrusel principal */}
    <Carousel
        data={ peliculasEstreno }
        inactiveSlideOpacity={0.9}
        itemWidth={300}
        sliderWidth={widthWindow}
        renderItem={ ( {item} : any )=><PosterMovie
            movie={item }/> }
        
    />
    </View> 


    {/* peliculas Populares */}
    <HorizontalSlider movies={peliculasEstreno} title='Populares'/>
    

    </View>
    </ScrollView>
    )
}

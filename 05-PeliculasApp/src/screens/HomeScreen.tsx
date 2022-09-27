
import React from 'react'
import {  View , ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import ImageColors from 'react-native-image-colors'
import { useMovies } from '../hooks/useMovies';
import { PosterMovie } from '../components/PosterMovie';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { Background } from '../components/Background';
import { getImageColors } from '../helpers/getColors';

const widthWindow = Dimensions.get('window').width

export const HomeScreen = ( ) => {


const { nowPlaying,popular,topRated,upcoming, isLoading} = useMovies()

const getPosterColor = async (index:number)=>{
    const movie=nowPlaying[index]
    const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    const[primary,secundary]= await getImageColors( uri )

    console.log({primary,secundary})
}

if (isLoading) {
    return(
        <View style={{flex:1,justifyContent:'center', alignContent:'center'}}>
            <ActivityIndicator color='red' size={ 100 } />
        </View>
    )
}



return (
    <Background>
    <ScrollView>
    <View style={{marginTop:20}}>
    <View style={{height:440}}>  
    {/* Carrusel principal */}
    <Carousel
        data={ nowPlaying}
        inactiveSlideOpacity={0.9}
        itemWidth={300}
        sliderWidth={widthWindow}
        onSnapToItem={index => getPosterColor ( index )}
        renderItem={ ( {item} : any )=><PosterMovie
            movie={item }/> }
        
    />
    </View> 


    {/* peliculas Populares */}
    <HorizontalSlider movies={popular} title='Populares'/>
    <HorizontalSlider movies={topRated} title='Top Peliculas'/>
    <HorizontalSlider movies={upcoming} title='Proximos Estrenos'/>
    
    

    </View>
    </ScrollView>
    </Background>
    )
}

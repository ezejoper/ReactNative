import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import currencyFormatter from 'currency-formatter'
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interface/movieInterface';
import { Cast } from '../interface/creditsInterface';
import { Actor } from './Actor';

interface Props{
    movieFull:MovieFull,
    cast:Cast[]
}

export const MovieDetail = ({ movieFull,cast }:Props) => {
  return (
    <>
        <View >
            <View style={{flexDirection:'row',marginHorizontal:20}}>
            <Icon
            name='star'
            color='#CED318'
            size={15}
            />
            <Text style={{color:'black',fontWeight:'bold'}}> {movieFull.vote_average.toFixed(1)}</Text>
            

            <Text style={{color:'black', marginLeft:4}}>
                - {movieFull.genres.map(e=>e.name).join(', ')}
            </Text>

            {/* HISTORIA */}
            </View  >
            <View style={{marginHorizontal:20}}>
            <Text style={{color:'black', fontSize:18,marginTop:10,fontWeight:'bold'}}>Historia</Text>
            <Text  style={{color:'black',fontSize:15,marginTop:3}}>{movieFull.overview}</Text>
            <View style={{flexDirection:'row', marginTop:10}}>
            </View>
            <Text style={{color:'black', fontSize:17,fontWeight:'bold'}}>Presupuesto: </Text>
            {movieFull.budget === 0.00 ? <Text style={{color:'black',marginTop:2, fontSize:16}}> No estipulado</Text> : <Text  style={{color:'black',marginTop:2, fontSize:16}}>{currencyFormatter.format(movieFull.budget,{code:'USD'})}</Text>}
            </View>

            {/* ACTORES */}
            <View style={{marginTop:10,marginBottom:100}}>
                <Text style={{color:'black', fontSize:18,fontWeight:'bold'}}>Actores</Text>
                <FlatList
                data={cast}
                keyExtractor={(item=>item.id.toString())}
                renderItem={({item})=><Actor actor={ item }/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10,height:50}}
                />
            </View>
        </View>
    </>
    
  )
}

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interface/creditsInterface'


interface Props{
    actor:Cast
}
export const Actor = ({actor}:Props) => {

    const uri= `https://image.tmdb.org/t/p/w500${actor.profile_path}`
  return (
    <View style={styles.container}>
       {
        actor.profile_path && 
        <Image
        source={{uri}}
        style={{
            width:40,
            height:40,
            borderRadius:10
        }}
        />
       }
       
        <View style={{marginLeft:6,marginRight:3}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:16}}> {actor.name}</Text>
        <Text style={{color:'black',fontSize:14,opacity:0.6}}> {actor.character}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height:45,
        flexDirection:'row',
        backgroundColor:'white',
        marginHorizontal:15,
        borderRadius:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.9,
shadowRadius: 10,

elevation: 5,
        
    }
});
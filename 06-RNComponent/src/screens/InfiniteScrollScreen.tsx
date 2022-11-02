import React, { useContext, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {
    const { theme:{colors} } = useContext(ThemeContext)
    const [number, setNumber] = useState([0,1,2,3,4,5])

    const renderItem=(item:number)=>{
        return(
            <Image
            source={{uri:`https://picsum.photos/id/${item}/500/400`}}
            style={{
                width:'100%',
                height:400
            }}
            />
        )
    }

    const loadMore=()=>{
        const newArray: number[]=[]
        for(let i=0; i < 5 ; i++ ){
            newArray[i]=number.length + i
        }
        setNumber([...number,...newArray])
    }
  return (
    <View style={{backgroundColor:colors.background, flex:1}}>
        
        <FlatList
        data={number}
        keyExtractor={(item)=>item.toString()}
        renderItem={({item})=>renderItem(item)}
        ListHeaderComponent={<HeaderTitle
            title='Infinity Scroll'
            />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<ActivityIndicator size={20} color='white'/>}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    texItem:{
        backgroundColor:'white',
        height:150,
        color:'black'
    }
});
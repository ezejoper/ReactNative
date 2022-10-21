import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {

    const [number, setNumber] = useState([0,1,2,3,4,5])

    const renderItem=(item:number)=>{
        return(
            <Text style={styles.texItem}>
                {item}
            </Text>
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
    <View style={{backgroundColor:'green', flex:1}}>
        
        <FlatList
        data={number}
        keyExtractor={(item)=>item.toString()}
        renderItem={({item})=>renderItem(item)}
        ListHeaderComponent={<HeaderTitle
            title='Infinity Scroll'
            />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    texItem:{
        backgroundColor:'red',
        height:150,
        color:'black'
    }
});
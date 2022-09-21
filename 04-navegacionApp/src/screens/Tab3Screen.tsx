import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab3Screen = () => {
    useEffect(() => {
        console.log('Tab3Screen effect')
      }, [])
  return (
    <View >
   <Text style={{color:'black'}}>Tab3</Text>
</View>
  )
}

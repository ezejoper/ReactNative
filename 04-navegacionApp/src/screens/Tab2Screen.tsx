import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2Screen effect')
  }, [])
  return (
    <View>
        <Text style={{color:'black'}}>Tab2</Text>
</View>
  )
}

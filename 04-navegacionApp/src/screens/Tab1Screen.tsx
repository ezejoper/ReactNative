import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';




export const Tab1Screen = () => {

    useEffect(() => {
      console.log('Tab1Screen effect')
    }, [])
    
  return (
    <View style={{...styles.globalMargin,marginTop:10}}>
        <Text style={styles.title}>Iconos</Text>
        <TouchableIcon nameIcon="airplane-outline" />
        <TouchableIcon nameIcon="body-outline" />
        <TouchableIcon nameIcon="battery-full-outline" />
        <TouchableIcon nameIcon="bluetooth-outline" />
        <TouchableIcon nameIcon="logo-android" />
        <TouchableIcon nameIcon="thumbs-up-outline" />  

    </View>
  )
}

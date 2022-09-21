import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';




export const Tab1Screen = () => {

    useEffect(() => {
      console.log('Tab1Screen effect')
    }, [])
    
  return (
    <View style={{...styles.globalMargin,marginTop:10}}>
        <Text style={styles.title}>Iconos</Text>
        <Icon name="airplane-outline" size={60} color={colores.primary} />
        <Icon name="body-outline" size={60} color={colores.primary} />
        <Icon name="battery-full-outline" size={60} color={colores.primary} />
        <Icon name="bluetooth-outline" size={60} color={colores.primary} />
        <Icon name="logo-android" size={60} color={colores.primary} />
        <Icon name="thumbs-up-outline" size={60} color={colores.primary} />    

    </View>
  )
}

import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';
import Icon from 'react-native-vector-icons/Ionicons';


export const SettingsScreen = () => {

  const { authState } = useContext( AuthContext )

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop:  20
    }}>
        <Text style={styles.title}> Settings </Text>
        <Text style={{color:'black'}}> {JSON.stringify( authState , null ,4)} </Text>
        


        {authState.favIcon && (
        <Icon 
          name={authState.favIcon}
          size={150}
          color={colores.primary}
        />)}
        
    </View>
  )
}

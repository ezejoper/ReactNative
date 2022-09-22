import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';

export const SettingsScreen = () => {

  const { authState } = useContext( AuthContext )

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop:  20
    }}>
        <Text style={styles.title}> Settings </Text>
        <Text style={{color:'black'}}> {JSON.stringify( authState , null ,4)} </Text>
    </View>
  )
}

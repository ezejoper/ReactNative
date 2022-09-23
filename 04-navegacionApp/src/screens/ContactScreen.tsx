import React, { useContext } from 'react'
import { Text, View , Button } from 'react-native'

import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContex';

export const ContactScreen = () => {

  const { signIn, authState:{ isLoggedIn },logout}= useContext( AuthContext )
  return (
    <View style={styles.globalMargin}>
    <Text  style={styles.title}>ContactScreen</Text>
    

    { !isLoggedIn  ? 
    <Button
      title='SignIn'
      onPress={ signIn }
    /> :
    <Button
      title='logout'
      onPress={ logout }
    />
    }
    </View>
  )
}

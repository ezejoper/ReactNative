import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    title:string
}

export const HeaderTitle = ({title}:Props) => {
    
        return(
          <View style={{marginTop:20, marginBottom:20}}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )
      }


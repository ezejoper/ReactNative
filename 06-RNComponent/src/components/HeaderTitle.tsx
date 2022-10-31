import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

interface Props{
    title:string
}

export const HeaderTitle = ({title}:Props) => {
  const { theme:{colors}} = useContext(ThemeContext)
        return(
          <View style={{marginTop:20, marginBottom:20}}>
            <Text style={{...styles.title,color:colors.text}}>{title}</Text>
          </View>
        )
      }


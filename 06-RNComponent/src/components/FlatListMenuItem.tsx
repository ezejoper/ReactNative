import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interface/appInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props{
  menuItem:MenuItem
}

export const FlatListMenuItem = ({menuItem:{name,icon,components}}:Props) => {
  const navigation=useNavigation()
  const { theme:{colors} } = useContext(ThemeContext)
    return(
      <TouchableOpacity
      onPress={()=>navigation.navigate(components)}
      activeOpacity={0.6}>
        <View style={styles.container}>
          <Icon
          name={icon}
          color={colors.primary}
          size={22}
          />
          <Text style={styles.itemText}>{name}</Text>

          <View style={{flex:1}}/>

          <Icon
          name='caret-forward-outline'
          color={colors.primary}
          size={22}
          
          />
          
        </View>
        </TouchableOpacity>
      )

  
}
const styles = StyleSheet.create({
    container:{
      flexDirection:'row'
    },
    itemText:{
      marginLeft:6,
      color:'black',
      fontSize:16
    }
});
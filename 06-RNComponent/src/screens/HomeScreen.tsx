import React from 'react'
import { Text, View ,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


interface MenuItem{
  name:string,
  icon:string
  components: string
}
const menuItems=[{
  name:'Animation 101',
  icon:'bookmark-outline',
  components:'Animation101Screen'
}]

export const HomeScreen = () => {

  const renderMenu=( menuItem: MenuItem )=>{
    return(
      <View>
        <Text style={{color:'black'}}>{menuItem.name} - {menuItem.icon}</Text>
      </View>
    )
  }


  return (
    <View>
      <FlatList 
      data={ menuItems }
      renderItem={({item})=>renderMenu(item)}
      keyExtractor={(item)=>item.name}
      /> 
    
  </View>
  )
}
// {*item es una representacion de la iteracion en la que se encuentra menuItem*}
import React from 'react'
import { Text, View ,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme';


interface MenuItem{
  name:string,
  icon:string
  components: string
}
const menuItems=[{
  name:'Animation 101',
  icon:'bookmark-outline',
  components:'Animation101Screen'
},
{
  name:'battery-dead-outline',
  icon:'bookmark-outline',
  components:'Animation101Screen'
}
]

export const HomeScreen = () => {

  const renderMenu=( menuItem: MenuItem )=>{
    return(
      <View >
        
        <Text style={{color:'black'}}>{menuItem.name} - {menuItem.icon}</Text>
      </View>
    )
  }
  const renderListHeader=()=>{
    return(
      <View style={{marginTop:20, marginBottom:20}}>
        <Text style={styles.title}>Opciones de Menu</Text>
      </View>
    )
  }
  const separador=()=>{
    return(
      <View style={{borderBottomWidth:2,
      opacity:0.4,
      marginVertical:8
      }}/>
    )
  }
  return (
    <View style={{flex:1,...styles.globalMargin}}>
      

      <FlatList 
      data={ menuItems }
      renderItem={({item})=>renderMenu(item)}
      keyExtractor={(item)=>item.name}
      ListHeaderComponent={renderListHeader} //genera una lista de "componentes" ubicados en el header
      ItemSeparatorComponent={separador} //utilizado para separar componentes de la flatList
      /> 
    
  </View>
  )
}
// {*item es una representacion de la iteracion en la que se encuentra menuItem*}
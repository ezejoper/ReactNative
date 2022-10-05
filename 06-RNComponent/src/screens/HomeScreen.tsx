import React from 'react'
import { Text, View ,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interface/appInterface';
import { styles } from '../theme/appTheme';



const menuItems: MenuItem[]=[{
  name:'Animation 101',
  icon:'bookmark-outline',
  components:'Animation101Screen'
},
{
  name:'Animation 102',
  icon:'battery-dead-outline',
  components:'Animation102Screen'
}
]

export const HomeScreen = () => {


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
      renderItem={({item})=><FlatListMenuItem menuItem={item}/>}
      keyExtractor={(item)=>item.name}
      ListHeaderComponent={renderListHeader} //genera una lista de "componentes" ubicados en el header
      ItemSeparatorComponent={separador} //utilizado para separar componentes de la flatList
      /> 
    
  </View>
  )
}
// {*item es una representacion de la iteracion en la que se encuentra menuItem*}
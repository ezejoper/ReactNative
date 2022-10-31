import React from 'react'
import { Text, View ,FlatList } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { Separador } from '../components/Separador';


export const HomeScreen = () => {

  

 
  return (
    <View style={{flex:1,...styles.globalMargin}}>
      

      <FlatList 
      data={ menuItems }
      renderItem={({item})=><FlatListMenuItem menuItem={item}/>}
      keyExtractor={(item)=>item.name}
      ListHeaderComponent={()=><HeaderTitle title='Opciones de Menu'/>} //genera una lista de "componentes" ubicados en el header
      ItemSeparatorComponent={()=><Separador/>} //utilizado para separar componentes de la flatList
      /> 
    
  </View>
  )
}
// {*item es una representacion de la iteracion en la que se encuentra menuItem*}

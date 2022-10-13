import React from 'react'
import { Text, View ,FlatList } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';


export const HomeScreen = () => {



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
      ListHeaderComponent={()=><HeaderTitle title='Opciones de Menu'/>} //genera una lista de "componentes" ubicados en el header
      ItemSeparatorComponent={separador} //utilizado para separar componentes de la flatList
      /> 
    
  </View>
  )
}
// {*item es una representacion de la iteracion en la que se encuentra menuItem*}
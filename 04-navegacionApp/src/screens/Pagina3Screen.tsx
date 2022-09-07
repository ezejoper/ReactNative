import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{

}//esto es para acceder a las props de Navigation luego pasamos por Props ya que al usar el Hook marca error

export const Pagina3Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title:'Hola mundo',
      // headerBackTitle:'back' cambia el regresar en iOs
    })
  }, [])
  

  return (
    <View>
       <Text style={styles.title}>
        Pagina 3
       </Text>
       <Button 
      title='Regresar'
      onPress={ ()=>navigation.pop()}
      />
      <Button 
      title='Ir a Pagina 1'
      onPress={ ()=>navigation.popToTop()}
      />
    </View>
  )
}

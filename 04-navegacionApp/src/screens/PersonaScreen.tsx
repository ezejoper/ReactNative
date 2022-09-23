import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { AuthContext } from '../context/AuthContex';


//Forma Rapida
// interface RouteParams{
//     id:number,
//     nombre:string
// }


interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{} //Primero recibe el ParmamsList , el segundo los nombres de las Routes
// "manera sucia", hago la interfaz y extiendo de StackScreenprops y luego hago una destructuring


export const PersonaScreen = ({ navigation, route }:Props) => {
    //Forma rapida:
    // const params = route.params as RouteParams; //aqui los "trata como lo que esta definido en dicha interfaz"
    const {changeUsername}= useContext(AuthContext)
    const params = route.params

    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre // el colocar params!.nombre esto indica que "confie TS"
        })
    }, [])
    
    useEffect(() => {
      changeUsername(params.nombre)
    }, [])

    // console.log(JSON.stringify(props,null,3))
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> 
            {
                JSON.stringify( params,null,3 )
            }
        </Text>
        
        </View>
  )
}

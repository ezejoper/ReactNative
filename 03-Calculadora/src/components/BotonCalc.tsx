import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/Themeapp';

interface Props {
    texto:string,
    color?:string,  
    accion: ( numeroTexto:string )=>void,

}

export const  BotonCalculadora =( { color = '#2D2D2D', texto , accion }: Props) => {
return (
    <TouchableOpacity 
        onPress={()=> accion(texto) }
    >

    <View style={ {...styles.boton,
        backgroundColor: color,
        width: (texto === '0' ) ? 180 : 80
}}>
    
    <Text style={{
    ...styles.botonTexto,
    color: ( color ==='#9B9B9B' ) ? 'black' : 'white' }}>{ texto } </Text>

</View>
</TouchableOpacity>
)
}

// #2D2D2D GRRIS
// #FF9427 naranja
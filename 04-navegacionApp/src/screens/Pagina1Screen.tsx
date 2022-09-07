import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{

}

export const Pagina1Screen = (  { navigation }: Props ) => {
    
  return (
    <View style={ styles.globalMargin }>
        
        <Text style={styles.title}>  Pagina 1  </Text>

        <Button
        title='ir a Pagina 2'
        onPress={ () => navigation.navigate('Pagina2Screen') }
        ></Button>
        
        <Text> Navegar por argumentos</Text>

        <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity 
          style={ {...styles.botonGrande,
          backgroundColor:'#2C3E50'
          }}
          onPress={ () => navigation.navigate('PersonaScreen',{
            id:1,
            nombre:'Pedro'
          }) }
        >
          <Text style={ styles.textoBoton } >Pedro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{...styles.botonGrande,
            backgroundColor:'#AF7AC5'
            }}
          onPress={ () => navigation.navigate('PersonaScreen',{
            id:2,
            nombre:'Maria'
          }) }
        >
          <Text style={ styles.textoBoton }>Maria</Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}


//navigation.navigate permite navegar entre mis paginas creadas recordar colocarlo en mis stack de navegacion
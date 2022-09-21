import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';


export type RootStackParams={
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined, 
  PersonaScreen:{
    id: number,
    nombre: string
  }, //en los otros podes dejar en undefined para dar flexibilidad, mientras que si recibe datos podes agregar una interface o crearla ahi mismo
}

const Stack = createStackNavigator<RootStackParams>();

export const MyStack=()=> {
  return (
    <Stack.Navigator
    //initialRouteName='' //podes decidir desde que screen comenzar
    screenOptions={{ //este hace que por defectos todos tengan un mismo estilo
        headerStyle:{ //quita la linea por defecto en android de la parte superior para iOs se usa el shadowColor
          elevation:0
        },
        cardStyle:{
          backgroundColor:'white'
        },
        headerShown:false
      }}
    >

      {/* option permite cambiar opciones como el titulo */}
      <Stack.Screen name="Pagina1Screen" options={{title:'Pagina 1'}} component={Pagina1Screen} /> 
      <Stack.Screen name="Pagina2Screen" options={{title:'Pagina 2'}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:'Pagina 3'}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" options={{title:'Pagina Persona'}} component={PersonaScreen} />
    </Stack.Navigator>
  );
}
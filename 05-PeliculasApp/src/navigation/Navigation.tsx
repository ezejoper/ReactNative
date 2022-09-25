import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Movie } from '../interface/movieInterface';

export type RootStackParams={
  HomeScreen:undefined,
  DetailScreen:Movie
}
const Stack = createStackNavigator<RootStackParams>();

export const Navigation=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }
    
    }
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
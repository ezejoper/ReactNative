import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';


const Tabs = createMaterialTopTabNavigator();

export const TopTabNavigator=()=> {

  // useSafeAreaInsets() usado en Ios
  return (
    <Tabs.Navigator
    sceneContainerStyle={{backgroundColor:'white'}}
    screenOptions={({route})=>({
      tabBarPressColor: colores.primary,
      tabBarIndicatorStyle:{
        backgroundColor:colores.primary
      },
      tabBarStyle:{
        elevation:0,
        borderWidth:0,
        borderTopColor:'white',
        shadowColor:'transparent'
      },
      tabBarIcon:({color,focused})=>{
        let nameIcon: string=''
    
        switch(route.name){
          case 'Chat':
            nameIcon = 'chatbox-ellipses-outline'
            break;
            case 'Contacts':
            nameIcon = 'people-outline'
            break;
            case 'Albums':
            nameIcon = 'albums-outline'
            break;
        }
       
    
        return <Icon name={ nameIcon } size={20} color='black'  />
      }
      
      
    })}
    
    >
      <Tabs.Screen name="Chat" component={ChatScreen} />
      <Tabs.Screen name="Contacts" component={ContactScreen} />
      <Tabs.Screen name="Albums" component={AlbumScreen} />
    </Tabs.Navigator>
  );
}
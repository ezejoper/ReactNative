
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { MyStack } from './Navigator';
import { colores, styles } from '../theme/appTheme';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import { ScreenContainer } from 'react-native-screens';

const Tab = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

export const Tabs= () => {
//   return(
//     <TabAndroid.Navigator
      
//       sceneAnimationEnabled={true}
//       barStyle={
//         {
//           backgroundColor:colores.primary
//         }
//       }
     
//       screenOptions={({route})=>({
//       tabBarInactiveTintColor:colores.primary,
//       tabBarStyle:{
//         elevation:0,
//         borderWidth:0,
//         borderTopColor:'white',
//       },
//       tabBarLabelStyle:{
//         fontSize:16
//       },
//       tabBarIcon:(props)=>{
//         let nameIcon: string=''
  
//         switch(route.name){
//           case 'TabScreen':
//             nameIcon = 'T1'
//             break;
//             case 'TabScren':
//             nameIcon = 'T2'
//             break;
//             case 'Stack Navigator':
//             nameIcon = 'Stack'
//             break;
//         }
  
//         return <Text style={{color: props.color}} > { nameIcon }</Text>
//       }
//     })}
//     >
//       <TabAndroid.Screen name="TabScreen" options={{ title: 'Tab1'}} component={ Tab1Screen } />
//     <TabAndroid.Screen name="TabScren"  options={{ title: 'Tab2' }} component={ TopTabNavigator } />
//     <TabAndroid.Screen name="Stack Navigator" options={{ title: 'Stack' }} component={ MyStack } />
//   </TabAndroid.Navigator>
// );
  

  return (
    <TabAndroid.Navigator
  
  screenOptions={({route})=>({
  tabBarInactiveTintColor:colores.primary,
  tabBarStyle:{
    elevation:0,
    borderWidth:0,
    borderTopColor:'white',
    
  },
  tabBarLabelStyle:{
    fontSize:16
  },
  tabBarIcon:(props)=>{
    let nameIcon: string=''

    switch(route.name){
      case 'TabScreen':
        nameIcon = 'heart-outline'
        break;
        case 'TabScren':
        nameIcon = 'earth-outline'
        break;
        case 'Stack Navigator':
        nameIcon = 'body-outline'
        break;
    }
   

    return <Icon name={nameIcon} size={20} color='white'  />
  }
})}
    >
    {/* <Tab.Screen name="TabScreen" options={{ title: 'Tab1',tabBarIcon:(props)=> <Text style={{color: props.color}}>T1</Text>}} component={ Tab1Screen } /> */}
    <TabAndroid.Screen name="TabScreen" options={{ title: 'Tab1'}} component={ Tab1Screen } />
    <TabAndroid.Screen name="TabScren"  options={{ title: 'Tab2' }} component={ TopTabNavigator } />
    <TabAndroid.Screen name="Stack Navigator" options={{ title: 'Stack' }} component={ MyStack } />
    </TabAndroid.Navigator>
  );
}

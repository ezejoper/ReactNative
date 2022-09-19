import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, View, TouchableOpacity  } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MyStack } from './Navigator';
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

export const MenuLateralNum2 = () => {
  return (
    <Drawer.Navigator
    drawerContent={ ( props )=> <MenuInterno {...props }/>}>
      <Drawer.Screen name="StackNavigator"  component={ MyStack } />
      <Drawer.Screen name="SettingScreen"component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps )=>{
  return (
    <DrawerContentScrollView>
      <View style={styles.contenedorAvatar}>
        <Image
          source={{
            uri:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
          }} 
          style={styles.avatar}
        />
      </View>


      {/* opciones de menu */}
      <View style={styles.menuContenedor}>

        <TouchableOpacity 
        onPress={()=>navigation.navigate("StackNavigator")} //solamente puedo mandar la que estan definidas en mi Stack
        style={styles.menuBoton}>
          <Text style={styles.color}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('SettingScreen')}
        >
        
          <Text style={styles.color}>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

  )
}
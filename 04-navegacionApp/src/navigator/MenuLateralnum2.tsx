import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text, View, TouchableOpacity  } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MyStack } from './Navigator';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();

export const MenuLateralNum2 = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShadowVisible:false,
      headerTransparent:false,
      

    }}
    drawerContent={ ( props )=> <MenuInterno {...props }/>}>
      <Drawer.Screen name="Navegation"  component={ Tabs } />
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
        onPress={()=>navigation.navigate("Navegation")} //solamente puedo mandar la que estan definidas en mi Stack
        style={styles.menuBoton}>
          <Text style={styles.color}><Icon name='home-outline' size={20} color='black'  /> Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>navigation.navigate('SettingScreen')}
        >
        
          <Text style={styles.color}><Icon name='settings-outline' size={20} color='black'  /> Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>

  )
}
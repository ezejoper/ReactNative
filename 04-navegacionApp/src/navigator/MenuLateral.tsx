import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MyStack } from './Navigator';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={ MyStack } />
      <Drawer.Screen name="SettingScreen" options={{title:'Setting'}} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}
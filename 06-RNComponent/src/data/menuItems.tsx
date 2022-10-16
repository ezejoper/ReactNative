import { MenuItem } from "../interface/appInterface";

export const menuItems: MenuItem[]=[{
    name:'Animation 101',
    icon:'bookmark-outline',
    components:'Animation101Screen'
  },
  {
    name:'Animation 102',
    icon:'battery-dead-outline',
    components:'Animation102Screen'
  },
  {
    name:'Switches',
    icon:'toggle-outline',
    components:'SwitchScreen'
  },
  {
    name:'Alerts',
    icon:'alert-circle-outline',
    components:'AlertScreen'
  },
  {
    name:'TextInput',
    icon:'document-text-outline',
    components:'TextInputScreen'
  }
  ]
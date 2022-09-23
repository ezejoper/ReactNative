import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContex';
import { ChatScreen } from '../screens/ChatScreen';

interface Props{
    nameIcon:string,
}

export const TouchableIcon = ( {nameIcon } :Props) => {

    const{ changeFavIcon }= useContext(AuthContext)
  return (
    <TouchableOpacity
    onPress={()=>changeFavIcon(nameIcon)}
    >
        <Icon name={nameIcon} size={60} color={colores.primary} />
    </TouchableOpacity>
  )
}

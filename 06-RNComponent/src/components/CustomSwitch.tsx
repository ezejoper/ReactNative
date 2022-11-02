import React, { useContext, useState } from 'react'
import { Switch } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Props{
    isOn:boolean,
    onChange:( value:boolean )=>void
}

export const CustomSwitch = ({isOn, onChange }:Props) => {

    const { theme:{colors} } = useContext(ThemeContext)
    
    const [isEnabled, setIsEnabled] = useState(isOn)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    };

    return (
    <Switch
        trackColor={{ false: "#D9D9D9", true: colors.primary }}
        thumbColor={isEnabled ? "white" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  )
}

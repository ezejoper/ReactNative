import React, { useState } from 'react'
import { Switch } from 'react-native'

interface Props{
    isOn:boolean,
    onChange:( value:boolean )=>void
}

export const CustomSwitch = ({isOn, onChange }:Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn)
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    };

    return (
    <Switch
        trackColor={{ false: "#D9D9D9", true: "#5856D6" }}
        thumbColor={isEnabled ? "white" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  )
}

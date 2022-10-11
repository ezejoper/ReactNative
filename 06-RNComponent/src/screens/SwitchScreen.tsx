import React, { useState } from 'react'
import { Switch, View } from 'react-native';

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <View style={{marginTop:100}}>
    <Switch
        trackColor={{ false: "#D9D9D9", true: "#5856D6" }}
        thumbColor={isEnabled ? "white" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

import React, { useContext, useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

  const { theme:{colors} } = useContext(ThemeContext)


  const [state, setState] = useState({
    isActive:true,
    isHungry:false,
    isHappy:true
  })
  const {isActive,isHappy,isHungry}=state

    const onChange=(value:boolean, field: string)=>{
      setState({
        ...state,
        [field]:value //[]es computar
      })
    }
  return (
    <View style={{marginHorizontal:20}}>

    <HeaderTitle title='Switches'/>
    <View style={styles.switchRow}>
      <Text style={{...styles.swtichText, color:colors.text}}>isActive</Text>
    <CustomSwitch 
    isOn={isActive}
    onChange={(value)=>onChange(value, 'isActive')}
    />
    
    </View>
    <View style={styles.switchRow}>
      <Text style={{...styles.swtichText, color:colors.text}}>isHungry</Text>
    <CustomSwitch 
    isOn={isHungry}
    onChange={(value)=>onChange(value, 'isHungry')}
    />
    
    </View>
    <View style={styles.switchRow}>
      <Text style={{...styles.swtichText, color:colors.text}}>isHappy</Text>
    <CustomSwitch 
    isOn={isHappy}
    onChange={(value)=>onChange(value, 'isHappy')}
    />
    
    </View>
    <Text style={{...styles.swtichText, color:colors.text}}>
      {JSON.stringify(state, null , 5)}
    </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    swtichText:{
      fontSize:25,
    },
    switchRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:2
    }
});
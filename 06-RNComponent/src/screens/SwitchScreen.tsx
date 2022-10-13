import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

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
      <Text style={styles.swtichText}>isActive</Text>
    <CustomSwitch 
    isOn={isActive}
    onChange={(value)=>onChange(value, 'isActive')}
    />
    
    </View>
    <View style={styles.switchRow}>
      <Text style={styles.swtichText}>isHungry</Text>
    <CustomSwitch 
    isOn={isHungry}
    onChange={(value)=>onChange(value, 'isHungry')}
    />
    
    </View>
    <View style={styles.switchRow}>
      <Text style={styles.swtichText}>isHappy</Text>
    <CustomSwitch 
    isOn={isHappy}
    onChange={(value)=>onChange(value, 'isHappy')}
    />
    
    </View>
    <Text style={styles.swtichText}>
      {JSON.stringify(state, null , 5)}
    </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    swtichText:{
      fontSize:25,
      color:'black'
    },
    switchRow:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:2
    }
});
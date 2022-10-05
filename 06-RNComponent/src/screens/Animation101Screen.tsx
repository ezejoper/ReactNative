import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Animation101Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'

    },
    purpleBox:{
        backgroundColor:'#5856d6',
        width:150,
        height:150
    }

});


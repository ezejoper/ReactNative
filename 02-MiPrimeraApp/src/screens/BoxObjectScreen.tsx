import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectScreen = () => {
  return (
    <View style={styles.container}>
        <Text 
        style={styles.title}
        >Box Object Model
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red'
  },
  title: {
    fontSize: 30,
    // width:250,
    borderWidth:5,
    padding:30,
    paddingHorizontal:20,
    paddingVertical:40,
    borderRadius:30
    // backgroundColor:'red'
  }
});
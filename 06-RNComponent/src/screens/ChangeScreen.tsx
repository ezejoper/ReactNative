import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeScreen = () => {

    const { setDarkTheme, setLightTheme,theme:{colors}} = useContext(ThemeContext)
  return (
    <View style={{...styles.globalMargin}}>

        <HeaderTitle
        title='Theme'
        />
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity style={{
            backgroundColor:colors.primary,
            justifyContent:'center',
            width:150,
            height:45,
            borderRadius:12,
            marginBottom:20
        }}
        onPress={setLightTheme}
        activeOpacity={0.8}
        >
            <Text style={styles2.text}> Light </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor:colors.primary,
            justifyContent:'center',
            width:150,
            height:45,
            borderRadius:12,
            marginBottom:20
        }}
        onPress={setDarkTheme}
        activeOpacity={0.8}
        >
            <Text style={styles2.text}> Dark </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles2 = StyleSheet.create({
    text:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
        
    },
    botonTouch:{
        backgroundColor:'#5856d6',
        justifyContent:'center',
        width:150,
        height:45,
        borderRadius:12,
        marginBottom:20
    }
});
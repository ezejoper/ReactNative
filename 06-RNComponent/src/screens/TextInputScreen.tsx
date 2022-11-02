
import React, { useContext, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Value } from 'react-native-reanimated';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const { theme:{colors, dividerColor} } = useContext(ThemeContext)
    const {form,onChange,inSuscribed}= useForm({
        name:'',
        email:'',
        phone:'',
        inSuscribed:false
    })

   
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.globalMargin}>
        <HeaderTitle
        title='TextInputs'
        
        />
        <TextInput
        style={{...stylesText.input,color:colors.text, borderColor:dividerColor}}
        placeholder='Ingrese nombre'
        placeholderTextColor={dividerColor}
        autoCorrect={false}
        autoCapitalize='words'
        onChangeText={(value)=>onChange( value,'name' )}
        />
        <TextInput
        style={{...stylesText.input,color:colors.text, borderColor:dividerColor}}
        placeholder='Ingrese Email'
        placeholderTextColor={dividerColor}
        autoCorrect={false}
        onChangeText={(value)=>onChange( value,'email' )}
        autoCapitalize='none'
        keyboardType='email-address'
        
        />

        <View style={stylesText.switchRow}>
      <Text style={stylesText.swtichText}>Suscribe :</Text>
    <CustomSwitch 
    isOn={inSuscribed}
    onChange={(value)=>onChange(value, 'inSuscribed')}
    />
    
    </View>
        <HeaderTitle
        title={JSON.stringify(form,null,3)}
        />
        <HeaderTitle
        title={JSON.stringify(form,null,3)}
        />
        <TextInput
        style={{...stylesText.input,color:colors.text, borderColor:dividerColor}}
        placeholder='Ingrese Telefono'
        placeholderTextColor={dividerColor}
        autoCorrect={false}
        keyboardType='number-pad'
        onChangeText={(value)=>onChange( value,'phone' )}
        />
    <View style={{height:100}}/>
    
    </View>
    
    </TouchableWithoutFeedback>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

const stylesText= StyleSheet.create({
    input:{
        borderWidth:1,
        color:'white',
        paddingHorizontal:10,
        borderRadius:10,
        borderColor:'rgba(0,0,0,0.3)',
        marginVertical:10,
        
    },
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

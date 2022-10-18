
import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Value } from 'react-native-reanimated';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

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
        style={stylesText.input}
        placeholder='Ingrese nombre'
        placeholderTextColor='rgba(0,0,0,0.3)'
        autoCorrect={false}
        autoCapitalize='words'
        onChangeText={(value)=>onChange( value,'name' )}
        />
        <TextInput
        style={stylesText.input}
        placeholder='Ingrese Email'
        placeholderTextColor='rgba(0,0,0,0.3)'
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
        style={stylesText.input}
        placeholder='Ingrese Telefono'
        placeholderTextColor='rgba(0,0,0,0.3)'
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
        color:'black',
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

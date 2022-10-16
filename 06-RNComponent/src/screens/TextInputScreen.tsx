
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle
        title='TextInputs'
        />

        <TextInput
        style={stylesText.input}
        />
    </View>
  )
}

const stylesText= StyleSheet.create({
    input:{
        borderWidth:2,
        color:'black'
    }
});

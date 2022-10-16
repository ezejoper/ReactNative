import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {

    const showAlerts =()=>{
        Alert.alert(
            'Titulo',
            'Mensaje de alerta',
            [
                {
                    text:'Cancelar',
                    onPress:()=>console.log('cancelado'),
                    style:'destructive'
                },
                {
                    text:'Aceptar',
                    onPress:()=>console.log('Aceptado')
                }
            ]
            // {
            //     cancelable:true,
            //     onDismiss:()=>console.log('Dismiss')
            // }

        )
    }

    const showPromp=()=>{
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alerts'/>
        <Button
            title='Mostrar Alerta'
            onPress={ showAlerts }
        />
        <View style={{marginBottom:10}}/>
        <Button
            title='Mostrar  Propmt'
            onPress={ showPromp }
        />
    </View>  
    
  )
}

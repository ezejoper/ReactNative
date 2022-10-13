import React from 'react'
import { Alert, Button, View } from 'react-native'
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
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Alerts'/>
        <Button
            title='Mostrar Alerta'
            onPress={ showAlerts }
        />
    </View>
  )
}

import React, { useContext, useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const { theme:{colors} } = useContext(ThemeContext)
    const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle
        title='Modal'
        />

        <Button 
            title='Abrir Modal'
            onPress={()=>{setIsVisible(true)}}
            color={colors.primary}
        />

        <Modal
        animationType='fade'
        visible={ isVisible }
        transparent={true}
        
        >

            {/* FONDO DEL MODAL */}
            <View style={{
                flex:1,
                // height:100,
                // width:100,
                backgroundColor:'rgba(0,0,0,0.2)',
                justifyContent:'center',
                alignItems:'center'
            }}>
            {/* CONTENIDO DEL MODAL */}
            <View style={{
                backgroundColor:'white',
                width:200,
                height:200,
                justifyContent:'center',
                alignItems:'center',
                shadowOffset:{
                    width:0,
                    height:10
                },
                shadowOpacity:0.5,
                elevation:17,
                borderRadius:12
            }}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>MODAL</Text>
                <Text style={{color:'black',marginBottom:20, fontSize:15}}>CUERPO DE MODAL</Text>
                <Button
                title='Cerrar'
                onPress={()=>setIsVisible(false)}
                color={colors.primary}
                />
            </View>


            </View>
        </Modal>
    </View>
  )
}

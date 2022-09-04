import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalculadora } from '../components/BotonCalc';
import { styles } from '../theme/Themeapp';




export default function CalculadorScreen() {
return (
    <View style={styles.calculadoraContainer }>
        <Text style={ styles.resultadoPeq }> 1,500.00</Text>
        <Text style={ styles.resultado }> 1,500.00</Text>

        {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='C' color='#9B9B9B'></BotonCalculadora>
        <BotonCalculadora texto='+/-' color='#9B9B9B'></BotonCalculadora>
        <BotonCalculadora texto='del' color='#9B9B9B'></BotonCalculadora>
        <BotonCalculadora texto='/' color='#FF9427' ></BotonCalculadora>
        </View>
        
         {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='7' ></BotonCalculadora>
        <BotonCalculadora texto='8' ></BotonCalculadora>
        <BotonCalculadora texto='9'></BotonCalculadora>
        <BotonCalculadora texto='x' color='#FF9427' ></BotonCalculadora>
        </View>
        
         {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='4' ></BotonCalculadora>
        <BotonCalculadora texto='5' ></BotonCalculadora>
        <BotonCalculadora texto='6'></BotonCalculadora>
        <BotonCalculadora texto='—' color='#FF9427' ></BotonCalculadora>
        </View>

         {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='1' ></BotonCalculadora>
        <BotonCalculadora texto='2' ></BotonCalculadora>
        <BotonCalculadora texto='3'></BotonCalculadora>
        <BotonCalculadora texto='+' color='#FF9427' ></BotonCalculadora>
        </View>

          {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='0' ></BotonCalculadora>
        <BotonCalculadora texto='.'></BotonCalculadora>
        <BotonCalculadora texto='=' color='#FF9427' ></BotonCalculadora>
        </View>

        
    </View>
    
    


    )
}

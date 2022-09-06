import React from 'react'
import {  Text, View } from 'react-native'
import { BotonCalculadora } from '../components/BotonCalc';
import { styles } from '../theme/Themeapp';
import { useCalculador } from '../hooks/useCalculador';
export default function CalculadorScreen() {

const {
    numeroAnterior,
    armarNumero,
    btnDividir,
    btnRestar,
    btnMultiplicar,
    btnSumar,
    numero,
    clean,
    negPos,
    deleteBtn,
    calcular
}=useCalculador()

return (
    <View style={styles.calculadoraContainer }>
        
        <Text style={ styles.resultadoPeq }> { numeroAnterior === '0' ? "" : numeroAnterior  }</Text>
        <Text style={ styles.resultado }
            adjustsFontSizeToFit
            numberOfLines={1}
        > {numero }</Text>

        {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='C' color='#9B9B9B' accion={ clean }></BotonCalculadora>
        <BotonCalculadora texto='+/-' color='#9B9B9B'accion={ negPos } ></BotonCalculadora>
        <BotonCalculadora texto='del' color='#9B9B9B' accion={ deleteBtn} ></BotonCalculadora>
        <BotonCalculadora texto='/' color='#FF9427' accion={ btnDividir }></BotonCalculadora>
        </View>
        
         {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='7'  accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto='8' accion={armarNumero} ></BotonCalculadora>
        <BotonCalculadora texto='9' accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto='x' color='#FF9427' accion={ btnMultiplicar } ></BotonCalculadora>
        </View>
        
         {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='4' accion={armarNumero} ></BotonCalculadora>
        <BotonCalculadora texto='5' accion={armarNumero} ></BotonCalculadora>
        <BotonCalculadora texto='6' accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto='—' color='#FF9427' accion={ btnRestar } ></BotonCalculadora>
        </View>

         {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='1' accion={armarNumero} ></BotonCalculadora>
        <BotonCalculadora texto='2' accion={armarNumero} ></BotonCalculadora>
        <BotonCalculadora texto='3' accion={armarNumero}></BotonCalculadora>
        <BotonCalculadora texto='+' color='#FF9427' accion={ btnSumar } ></BotonCalculadora>
        </View>

          {/* fila de botones */}
        <View style={ styles.fila }>
        <BotonCalculadora texto='0' accion={armarNumero} ></BotonCalculadora>
        <BotonCalculadora texto='.' accion={armarNumero} ></BotonCalculadora>
        <BotonCalculadora texto='=' color='#FF9427' accion={ calcular } ></BotonCalculadora>
        </View>

        
    </View>
    
    


    )
}

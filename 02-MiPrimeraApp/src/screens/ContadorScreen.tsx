import React ,{ useState }from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

const [ contador, setContador ] = useState(10)

return (
    <View style={ styles.container }>
        <Text style={styles.title}>
            Contador: { contador }
        </Text>

        <Fab 
            title= '+1'
            onPress={()=> setContador( contador + 1 )}
            
        />
        <Fab 
            title= '-1'
            onPress={()=> setContador( contador - 1 )}
            position='bleft'
        />

        {/* <TouchableOpacity
            style={ styles.fabLocationLeft }
            onPress={()=> setContador(contador - 1 ) }
        >
        <View style={ styles.fab }>
        <Text style={ styles.fabText}>-1</Text>
        </View>
        </TouchableOpacity> */}
            
    </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        textAlign:'center',
            fontSize:40,
            color:'black',
            top:-15
    },
    
})
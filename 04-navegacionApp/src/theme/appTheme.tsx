import { StyleSheet } from "react-native";

export const colores={
    primary: '#5856d6'
}



export const styles = StyleSheet.create({
    color:{
        color:'black',
        fontSize:20
    },
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        color:'black',
        marginBottom:10
    },

    botonGrande:{
        width:90,
        height:90,
        backgroundColor:'red',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        margin:10
    },
    textoBoton:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100,
        
    },
    contenedorAvatar:{
        alignItems:'center',
        marginTop:20
    },
    menuContenedor:{
        marginVertical:40,
        marginHorizontal:30
    },
    menuBoton:{
        marginVertical:20
    }
});
import ImageColors from "react-native-image-colors"




export const getImageColors = async (uri:string)=>{
    
    
    const resultColor = await ImageColors.getColors(uri, {})

    let primary;
    let secundary;


    if(resultColor.platform==='android'){
        primary=resultColor.dominant
        secundary=resultColor.average
    }
    
    return[primary,secundary]
}
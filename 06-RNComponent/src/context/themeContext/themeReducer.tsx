import { Theme } from "@react-navigation/native"

type ThemeAction=
    |{type: 'light_theme'}
    |{type:'dark_theme'}

export interface ThemeState extends Theme{
    currentTheme: 'light' | 'dark',
    dividerColor: string
}
export const lightTheme: ThemeState ={
    currentTheme:'light',
    dark:false,
    dividerColor:'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084f6a',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'pink',
        notification: 'teal'}
}
export const darkTheme: ThemeState ={
    currentTheme:'dark',
    dark:true,
    dividerColor:'rgba(0,0,0,0.7)',
    colors: {
        primary: '#75cedb',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'pink',
        notification: 'teal'}
}

export const themeReducer=(state:ThemeState, action:ThemeAction ):ThemeState=>{
    switch(action.type){
        case 'light_theme':
            return lightTheme
            case 'dark_theme':
                return {...darkTheme}
        default:
            return state
    }
}
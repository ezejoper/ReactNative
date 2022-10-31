import { createContext, useReducer } from "react";
import { ThemeState, themeReducer, lightTheme } from './themeReducer';

interface ContextTheme{
    theme: ThemeState,
    setDarkTheme:()=>void,
    setLightTheme:()=>void
}
export const ThemeContext = createContext({} as ContextTheme)

export const ThemeProvider=({children}:any)=>{

    const [theme, dispatch] = useReducer( themeReducer,lightTheme) //TODO: Necesito leer el estado o el tema global del telefono
    const setDarkTheme = ()=>{
        dispatch({type:'dark_theme'})
        console.log('dark')
    }

    const setLightTheme = ()=>{
        dispatch({type:'light_theme'})
        console.log('light')}
    return(
        <ThemeContext.Provider value={{
            setDarkTheme,
            setLightTheme,
            theme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}
//createcontex ponemos todo lo que esta en el mundo exterior 'hijos'
import { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

interface ContextTheme{
    theme: ThemeState,
    setDarkTheme:()=>void,
    setLightTheme:()=>void
}
export const ThemeContext = createContext({} as ContextTheme)

const colorScheme=useColorScheme()

export const ThemeProvider=({children}:any)=>{

    const [theme, dispatch] = useReducer( themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme) //TODO: Necesito leer el estado o el tema global del telefono
    
    //  useEffect(() => {
    //    (colorScheme === 'light' )?   setLightTheme() : setDarkTheme()
    //  }, [colorScheme])
    
    
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
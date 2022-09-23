import { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";

//Aqui definimos como sera la informacion que tendre
export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favIcon?:string
}

//estado inicial de la app

export const initialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favIcon:undefined
}

// Lo usaremos para decirle a React como luce  y expondra el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: ()=> void
    changeFavIcon:(nameIcon:string)=>void
    logout: ()=> void
    changeUsername:(username:string)=>void
}


//creando el contexto 
export const AuthContext = createContext( {} as AuthContextProps )


// Componente proveedor del estado
export const AuthProvider = ({ children } : any)=>{
    const [authState, dispatch] = useReducer(authReducer, initialState)
    

    const  signIn = () =>{
        dispatch( { type : 'signIn' })
    }
    const changeFavIcon = ( nameIcon : string) =>{
        dispatch({type: "changeFavIcon" ,payload:nameIcon})
    }
    const  logout = () =>{
        dispatch( { type : 'logout' })
    }
    const changeUsername = ( username : string) =>{
        dispatch({type: "changeUsername" ,payload:username})
    }
    return(
        <AuthContext.Provider 
            value={{
                authState,
                signIn,
                changeFavIcon,
                logout,
                changeUsername
            }}
        >
            {children}

        </AuthContext.Provider>

    )
}
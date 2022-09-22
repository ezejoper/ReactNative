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
}


//creando el contexto 
export const AuthContext = createContext( {} as AuthContextProps )


// Componente proveedor del estado
export const AuthProvider = ({ children } : any)=>{
    const [authState, dispatch] = useReducer(authReducer, initialState)

    
    return(
        <AuthContext.Provider 
            value={{
                authState,
                signIn: ()=> {}
            }}
        >
            {children}

        </AuthContext.Provider>

    )
}
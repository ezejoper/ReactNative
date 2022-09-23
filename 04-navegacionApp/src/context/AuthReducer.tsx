import { AuthState } from './AuthContex';

type AuthAction= 
    { type: 'signIn' }
|   { type: 'logout' }
|   {type: 'changeFavIcon',payload: string}
|   {type: 'changeUsername',payload: string}

export const authReducer = ( state : AuthState, action: AuthAction) : AuthState =>{


    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                username:'no-username'
            }
        case 'changeFavIcon':
            return{
                ...state,
                favIcon: action.payload
            }
        case 'logout':
            return {
                ...state,
                isLoggedIn:false,
                username:undefined,
                favIcon:undefined
            }
        case 'changeUsername':
            return{
                ...state,
                username:action.payload
            }
        default:
            return state
    }
}
import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredencials, login, logout } from "./"

// thunk de autenticacion
export const checkingAuthenticated = (email , password) => {
    return async(dispatch ) => {
        dispatch( checkingCredencials());
    }
}

// thunk de Google
export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        dispatch (checkingCredencials());
        const result = await singInWithGoogle();
        if(!result.ok) return dispatch( logout( result.errorMessage))
        
        dispatch( login( result ) )
    }
}
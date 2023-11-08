import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredencials } from "./"

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
        const result = singInWithGoogle();
    }
}
import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
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
        //Creacion de usuario con correo y contraseña
export const startCreatingUserWithEmailPassword = ({ email, password , displayName }) => {
    return async( dispatch ) => {
        dispatch(checkingCredencials());
        const { ok, uid, photoURL } = await registerUserWithEmailPassword({ email, password , displayName });
        //se espera que el logout tenga un objeto errorMessage
        if (!ok) return dispatch(logout({ errorMessage }))
        dispatch(login ({ uid, displayName, email, photoURL}));
    }
}
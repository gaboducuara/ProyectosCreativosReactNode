import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
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
        dispatch( login( result ))
    }
}
        //Creacion de usuario con correo y contraseña
export const startCreatingUserWithEmailPassword = ({ email, password , displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredencials ());
        
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password , displayName });
        //se espera que el logout tenga un objeto errorMessage
        if (!ok) return dispatch( logout ({ errorMessage }))
        dispatch(login ({ uid, displayName, email, photoURL }));
    }
}

    // Chequeo de usuario y contraseña del login
export const startLoginWithEmailPassword = ({  email, password }) => {
    return async ( dispatch ) => {
        dispatch( checkingCredencials());

        const result = await loginWithEmailPassword({ email , password });
        console.log(result)
        if( !result.ok ) return dispatch( logout( result));
        dispatch( login( result ));
    }
}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout());
    }
}
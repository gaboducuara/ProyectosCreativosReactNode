// TODOS mis proveedores de autenticacion
import {signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
// const googleProvider = googleProvider.setCustomParameters({    prompt: 'select_account'});

// funcion que sirve para autenticarse con google 
export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //Informacion del usuario
            displayName, email, photoURL, uid
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            ok: false,
            errorMessage,
        }
    }
}


// CODIGO PARA REGISTRARSE CON USUARIO Y CONTRASEÑA

//Registro de usuario con usuario y contraseña
export const registerUserWithEmailPassword = async ({email, password , displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid , photoURL } = resp.user
        //TODO: actualizar el displayName en Firebase
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log(error);
        return {ok: false, errorMessage: error.message}
    }
}

//login de usuario con usuario y contraseña
export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password )
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true, 
            uid, photoURL, displayName
        }
    } catch(error){
        return {ok: false, errorMessage: error.message}
    }
}

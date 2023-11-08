// TODOS mis proveedores de autenticacion
import { GoogleAuthProvider, singInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

// funcion que sirve para autenticarse con google 
export const singInWithGoogle = async() => {

    try {
        const result = await singInWithPopup (FirebaseAuth, googleProvider)
        const credentials = GoogleAuthProvider.credentialFromResult( result );
        console.log({ credentials })
    } catch(error) {
        console.log(error)
    }
}
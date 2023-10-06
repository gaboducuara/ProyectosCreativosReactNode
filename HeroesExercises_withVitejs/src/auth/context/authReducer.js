import { types } from '../types/types';

//Los reducer estan destinados a hacer funciones puras 
//que no llaman recursos externos, no llaman ninguna API externa, ninguna funcionalidad externa
// Tienen que resolverse con el state que reciben y la accion, no deben llamar informacion
//que se encuentra afuera eso incluye -> llamar localStorage, axios 

export const authReducer = (state = {} , action ) => {
             //Aqui estoy logueando a la aplicacion es decir entrando a la app.
    switch ( action.type ) {

        case types.login:
            return {
                ... state,
                logged: true,
                user: action.payload
            };
            //Aqui se esta realizando el logout! es decir salir de la app.
        case types.logout:
            return {
                logged: false,
            };
    
        default:
            return state;
    }
};
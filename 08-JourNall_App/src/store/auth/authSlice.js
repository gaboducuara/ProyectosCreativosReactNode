//storage relacionado a la authenticacion
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        //se loguea cambia el status autenticado
        login: (state, { payload }) => {
            state.status = 'authenticated',
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        // se desloguea cambia el status a no autenticado
        logout: (state, { payload }) => {
            state.status = 'not-authenticated',
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        //nos sirve para saber si esta authenticado o no
        checkingCredencials: (state) => {
            state.status = 'checking';
        }
    }
})

//Acciones especificas
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredencials } = authSlice.actions
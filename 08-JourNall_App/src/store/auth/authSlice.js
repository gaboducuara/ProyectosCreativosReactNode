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
        login:( state , action )=> {

        },
        logout:( state , payload )=> {

        },
        //nos sirve para saber si esta authenticado o no
        checkingCredencials: (state) => {
            state.status = 'checking';
        }
    }
})

//Acciones especificas
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredencials} = authSlice.actions
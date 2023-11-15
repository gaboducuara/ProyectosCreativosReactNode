import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        //boolean en este caso para guardar o no
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        //funcion para una nueva nota o nueva entrada
        addNewEmtyNote: (state, action) => {

        },
        //funcion que, al hacer click se establece una nota activa
        setActiveNote: (state, action) => {

        },
        // funcion para cargar las notas
        setNotes: (state, action) => {

        },
        //Funcion para grabar las notas, (boolean: true)
        setSaving: (state) => {

        },
        //Actualizar una nota
        updateNote: (state, action) => {

        },
        //Eliminacion de una nota
        deleteNoteById: (state, action) => {

        },
    }
})


// Action creators are generated for each case reducer function
export const { 
    addNewEmtyNote, 
    setActiveNote, 
    setNotes, 
    setSaving, 
    updateNote, 
    deleteNoteById } = journalSlice.actions
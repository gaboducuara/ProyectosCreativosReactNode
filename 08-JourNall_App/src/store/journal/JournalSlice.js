import { fabClasses } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        //boolean en este caso para guardar o no
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        //funcion para una nueva nota o nueva entrada
        addNewEmtyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        //funcion que, al hacer click se establece una nota activa
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        // funcion para cargar las notas
        setNotes: (state, action) => {
            state.notes = action.payload;
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
    deleteNoteById,
    savingNewNote } = journalSlice.actions;
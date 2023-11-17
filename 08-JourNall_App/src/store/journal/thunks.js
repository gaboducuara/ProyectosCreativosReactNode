import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmtyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from './'
import { loadNotes } from '../../helpers'

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch( savingNewNote())
        // se trae uid del getState que esta dentro del auth
        const { uid } = getState().auth
        
        // nueva nota
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        // Creacion de referencia al PUNTO DE NOTAS en la creacion 
        //de la collecion en base de datos
        const newDoc = doc(collection (FirebaseDB, `${ uid }/journal/notes`));
        // insercion de la nueva nota
        const setDocResp = await setDoc( newDoc, newNote);
        newNote.id = newDoc.id;


        //aqui se llaman los dispatch establecidos en el journalSlice
        dispatch( addNewEmtyNote(newNote));
        dispatch( setActiveNote (newNote));
    }
}

export const startLoadingNotes = () => {
    return async ( dispatch , getState ) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El uid del usuario no existe')
        
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes))
    }
}

export const startSaveNote = () => {
    return async ( dispatch , getState ) => {

        dispatch( setSaving())

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        //la Nota que se envia a Firestore a grabar
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        //Forma de impactar la base de datos en firebase
        await setDoc( docRef , noteToFireStore, { merge: true } );

        dispatch ( updateNote( note ) )
    }
};
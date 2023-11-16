import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmtyNote, setActiveNote, savingNewNote } from './'

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
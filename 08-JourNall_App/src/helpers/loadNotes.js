
import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from './../firebase/config';


export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('El uid del usuario no existe');

    // Aca se traen los documentos de firebase
    const collectionRef = collection(FirebaseDB, `${ uid }/journal/notes`);
    const docs = await getDocs(collectionRef)

    const notas = [];
    docs.forEach(doc => {
        notas.push({ id: doc.id, ...doc.data()});
    });
    console.log(notas)
    return notas
}
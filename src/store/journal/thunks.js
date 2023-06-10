import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());
        //Todo: tarea dispatch de una nueva accion que cambie el estado
        //todo crear el reducer


        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FireBaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id



        //dispatch
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
        
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) =>{

        const {uid} = getState().auth;
        if(!uid) return dispatch(logout());

      const notes = await loadNotes(uid);
       dispatch(setNotes(notes));
    }
}


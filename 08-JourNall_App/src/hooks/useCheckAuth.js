import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // efecto de si la perszona esta autenticada o no
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            //SI no tengo un usuario autenticado entonces logout
            if (!user) return dispatch(logout());
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }))
        })
    }, [])
    
    return status
}

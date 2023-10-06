import {useContext} from 'react'
import {AuthContext} from '../auth'
import { Navigate, useLocation } from 'react-router-dom';

//children significa que recibe los componentes
//que estan dentro del PrivateRoute;
export const PrivateRoute = ({ children }) => {
    //aqui se sabe si el usuario esta autenticado o no
    const { logged } = useContext( AuthContext);
    const { pathname , search } = useLocation()
    
    // Logica para recordar en que pagina se quedo el cliente despues de desloguearse
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath)
    //Si esta autenticado mando el childrenen caso contrario regreso al login
    return ( logged ) 
    ? children 
    : <Navigate to="/login" />
}


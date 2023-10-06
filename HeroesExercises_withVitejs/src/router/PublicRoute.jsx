import {useContext} from 'react'
import {AuthContext} from '../auth'
import { Navigate } from 'react-router-dom';

//children significa que recibe los componentes
//que estan dentro del PrivateRoute;
export const PublicRoute = ({ children }) => {
    //aqui se sabe si el usuario esta autenticado o no
    const { logged } = useContext( AuthContext);
    //Si no estoy autenticado voy a mostrar el login, pero si estoy autenticado te muestro marvel components
    return ( !logged ) 
    ? children 
    : <Navigate to="/marvel" />
}
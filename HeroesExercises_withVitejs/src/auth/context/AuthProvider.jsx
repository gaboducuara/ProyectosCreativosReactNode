
import { useReducer } from 'react'
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import {types} from '../types/types'

// const initialState = {
//   logged:false,
// }

const init = () => {
  // Si esto regresa null, significa que no existe un usuario, pero si regresa otra cosa que no sea null
  // entonces tenemos el usuario
  const user = JSON.parse (localStorage.getItem('user'));
  // si el user existe se estara en true, por lo cual se retorna el user.
  return {
    logged: !!user, 
    user,
  }
}

export const AuthProvider = ({ children }) => {

  const [authState , dispatch ] = useReducer(authReducer , {} , init )

//codigo para realizar login

const login = ( name = '') => {

  const user = {id: 'ABC' , name }

  const action = {
    type: types.login,
    payload: {
      user,
    }
  }
  // En el localStorage Solo se puede grabar String entonces se manda el user.
  localStorage.setItem('user', JSON.stringify(user));

  dispatch(action);
}

//Me deslogueo
const logout = () => {
  // mandamos a eliminar el user 
  localStorage.removeItem('user');
  const action = {type: types.logout};
  dispatch(action);
}

  return (
    <AuthContext.Provider value={{ 
      //Atributos
    ...authState,

    //Metodos
    login,
    logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
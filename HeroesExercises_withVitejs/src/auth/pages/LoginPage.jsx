import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  
  const { login } = useContext(AuthContext)
  const navigate = useNavigate();

const onLogin = () => {
  // parte de la Logica para recordar en que pagina se quedo el cliente despues de desloguearse
  const lastPath = localStorage.getItem('lastPath') || '/'

  login( 'Gabriel Mancilla ') 

  navigate(lastPath, {
    replace: true, 
  });
};
  
  return (
    <div className="containter m-5">
      <h1>LoginPage</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  );
};
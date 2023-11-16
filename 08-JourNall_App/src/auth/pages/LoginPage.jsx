import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography, useMediaQuery } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/index';
import { checkingAuthenticated, startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  // una especie de validacion en los botones de login y google
  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch();
  // Aqui se DEFINIRA como sera el formulario
  const { email, password, onInputChange } = useForm( formData );
  // se cersiona sobre el estado de la autenticacion y queda guardada en el memo
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  // Funcion OnSubmit BOTON  DE LOGIN
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  //BOTON  DE GOOGLE
  const onGoogleSignIn = () => {
    dispatch(startGoogleSingIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 1 }}>
            <Grid
              item
              xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                // estara desabilitada si esta autenticando
                disabled={isAuthenticating}
                type="submit"
                variant='contained'
                fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                // estara desabilitada si esta autenticando
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

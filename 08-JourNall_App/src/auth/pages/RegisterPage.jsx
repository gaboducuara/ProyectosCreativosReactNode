import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';


// EL FORMATO DEL FORMULARIO
const formData = {
  email: '', 
  password: '',
  displayName: '', 
}

//Objeto personalizado
const formValidations = {
  //validaciones del email en el formulario
  email:[(value) => value.includes('@'), 'El correo debe tener @'],
  //validaciones del password  en el formulario
  password:[(value) => value.length >= 6 , 'La contraseña debe de tener mas de 6 letras.'],
  //validaciones del NAME O DISPLAYNAME en el formulario
  displayName:[(value) => value.length >= 1 , 'El nombre es obligatorio.'],

}

export const RegisterPage = () => {

    const [formsubmitted, setformsubmitted] = useState()

  const { displayName, email, password, onInputChange, formState, 
  isFormValid, displayNameValid, emailValid, passwordValid,
  //Aqui se pasan argumentos o funciones para el uso del userFORM
} = useForm(formData, formValidations);


console.log(displayNameValid)

  const onSubmit = ( event ) => {
    event.preventDefault();
    setformsubmitted(true)
    console.log(formState)
  }

  return (
    <AuthLayout title="Crear cuenta">
      <h1>FormValid {isFormValid ? 'valido' : 'incorrecto'} </h1>
      <form onSubmit={ onSubmit }>
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                //Aqui se manejan validaciones de nombre completo
                error={ !!displayNameValid && formsubmitted}
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formsubmitted }
                helperText={ emailValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formsubmitted }
                helperText={ passwordValid }
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button
                type='submit'
                variant='contained' 
                fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}

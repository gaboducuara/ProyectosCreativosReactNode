import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {}) => {
    
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    // vamos a guardar el valor de isFormValid
    const isFormValid = useMemo(() => {
        
        for (const formValue of Object.keys(formValidation)) {
            if ( formValidation [formValue] !== null) return false;
        }
        
        return true;
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    //Creacion de Validaciones para el FORMULARIO
    const createValidators = () => {
        //Aqui se analiza el objeto de validaciones del RegistePages.jsx
        const formCheckedValues = {}

        for (const formField of Object.keys( formValidations )) {
            //fn = funcion de validacion
            const [ fn , errorMessage = 'Este campo es requerido.' ] = formValidations[ formField]
            formCheckedValues[`${ formField}Valid`] = fn (formState[formField]) ? null: errorMessage
        }
            setformValidation( formCheckedValues )
            console.log( formCheckedValues )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}

import { types } from '../../../src/auth/types/types';
import { authReducer } from '../../../src/auth';

describe('Pruebas en authReducer', () => { 

    test('debe de retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false}, {});
        expect( state ).toEqual({ logged: false});
    })

    test('debe de (login) llamar el login por autenticar y establecer el user', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'gabriel',
                id: '123456'
            }
        }
        const state = authReducer({ logged: false }, action );
        expect (state).toEqual({
            logged: true,
            user: action.payload
        })
    })
    
    test('debe de (logout) borrrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user: {id:'1234' , name: 'gabriel'}
        }
        const action = {
            type: types.logout
        }
        const newState = authReducer( state , action );
        expect( newState ).toEqual({ logged: false});

    });
});
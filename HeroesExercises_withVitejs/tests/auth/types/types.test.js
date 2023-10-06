
import { types } from './../../../src/auth';

describe('Pruebas en "Types.js"', () => { 

    test('debe de regresar estos Types', () => {

        expect(types).toEqual({
                login:'[Auth] Login',
                logout: '[Auth] Logout',
        });
    });
});
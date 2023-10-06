import { render , screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';


describe('Pruebas en <AppRouter />', () => {

    test('debe de mostrar el login SI no esta autenticado', () => {

    const contextValue = {
        logged: false, 
    }

    render(
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        </MemoryRouter>
    );

    expect(screen.getAllByText('Login').length).toBe(1);
    expect(screen.getAllByText('LoginPage').length).toBe(1);

    });

    test('debe mostrar el componente de marvel Si esta autenticado', () => {
        
        const contextValue = {
            logged: true, 
            user: {
                id:'ABC',
                name:'Juan carlos'
            }
        }
    
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)

    });
});
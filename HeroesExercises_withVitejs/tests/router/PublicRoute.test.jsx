
import { render, screen } from '@testing-library/react';
// import { AuthProvider } from './../../src/auth/context/AuthProvider';
import { PublicRoute } from './../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el children Si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta publica')).toBeTruthy();

    });

    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: '123',
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        {/* Esta Ruta es Publica */}
                        <Route path='login' element={<PublicRoute><h1>Ruta publica</h1></PublicRoute>} />
                        
                        {/* Esta Ruta es de marvel */}
                        <Route path='marvel' element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    });
});
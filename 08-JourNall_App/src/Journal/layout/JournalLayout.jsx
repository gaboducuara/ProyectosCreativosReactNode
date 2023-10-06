import { Box, Toolbar } from '@mui/material'
import { Navbar , SidebBar} from '../components';
    // ------> Diseño de pagina 

    const drawerWidth = 280;

    export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* drawerWidth Navbar -> Barra de navegación */}
                <Navbar drawerWidth={drawerWidth}/>
            {/* drawerWidth sidebar - > barra lateral*/}
            <SidebBar drawerWidth={drawerWidth}/>

            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar -> Barra de herramientas*/}
                    <Toolbar/>
                { children }
            </Box>
        </Box>
    )
}


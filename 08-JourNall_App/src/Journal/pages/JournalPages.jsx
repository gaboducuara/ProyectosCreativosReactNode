import { IconButton } from '@mui/material';
import { NoteView, NothingSelectedView } from '../view';
import { JournalLayout } from './../layout/JournalLayout';
import { AddOutlined } from '@mui/icons-material';

export const JournalPages = () => {
  return (
    <JournalLayout>
      {/* <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure, quia sunt autem repellat quas minima minus nam rem unde eius nihil veniam reiciendis iste at. Ex incidunt sapiente tenetur!</Typography> */}
    
      {/* --> No hay nada seleccionado -> NothingSelected  */}
      {/* <NothingSelectedView /> */}
      {/* cuando existe una nota en pantalla -> NoteView  */}
      <NoteView/>


      {/* boton flotante */}
    
    <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
    >
      <AddOutlined sx={{ fontSize: 30 }}/>
    </IconButton>

    </JournalLayout>
  )
}

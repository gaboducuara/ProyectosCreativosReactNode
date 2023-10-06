import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../Auth/routes/AuthRoutes'
import { JournalRoutes } from '../Journal/routes/JournalRoutes'

export const AppRouter = () => {
  return (
    <Routes>

        {/* login y Registro*/}
        <Route path='/auth/*' element={<AuthRoutes/>}/>
        {/* JournalApp*/}
        <Route path='/*' element={<JournalRoutes/>}/>

    </Routes>
  )
}
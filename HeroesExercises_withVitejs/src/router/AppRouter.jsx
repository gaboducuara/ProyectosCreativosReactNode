import { Route, Routes } from "react-router-dom"
import { HeroesRoutes} from "../heroes"
// import { LoginPage } from "../auth/pages"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { LoginPage } from "../auth"

export const AppRouter = () => {
  return (
  <>
      <Routes>

        {/* //Rutas publicas */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
        />

        {/* Rutas privadas */}
{/* //aqui es necesario protejer esta ruta que contiene SubRutas; */}
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/> 
      </Routes>
  </>
  )
}

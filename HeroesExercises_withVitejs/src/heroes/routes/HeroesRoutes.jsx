import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPages, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelPages/>}/>
              <Route path="dc" element={<DcPage/>}/>
              <Route path="search" element={<SearchPage/>}/>
              {/* El heroId es una Url comodin */}
              <Route path="hero/:id" element={<HeroPage/>}/>
              <Route path="/" element={<Navigate to="/marvel"/>}/>
          </Routes>
        </div>
        
    </>
  )
}

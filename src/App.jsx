import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Beranda from "./pages/Beranda/Beranda"
import Profil from "./pages/Profil"
import Pilihan from "./pages/Pilihan"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Detail from "./pages/Detail"
import Error from "./pages/Error"
import './App.css'
import Produk from "./pages/Produk/Produk"
import ProdukDetail from "./pages/Produk/ProdukDetail"
import Negara from "./pages/Negara/Negara"
import NegaraDetail from "./pages/Negara/NegaraDetail"
import ThemeContext from "./context/ThemeContext"
import { useState } from "react"

function App() {

  const theme = useState("light");

  return (
   <BrowserRouter>
   <ThemeContext.Provider value={theme}>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Beranda/>}/>
    <Route path='/profil'  element={<Profil/>}/>
    <Route path='/Pilihan'  element={<Pilihan/>}/>
  
    <Route path='/detail/:id'  element={<Detail/>}/>
    <Route path='/Produk'  element={<Produk/>}/>
    <Route path='/ProdukDetail/:id'  element={<ProdukDetail/>}/>
    <Route path='/Negara'  element={<Negara/>}/>
    <Route path='/NegaraDetail/:id'  element={<NegaraDetail/>}/>
    <Route path='*'  element={<Error/>}/>
   </Routes>
   </ThemeContext.Provider>
   <Footer/>
   </BrowserRouter>
  )
}

export default App

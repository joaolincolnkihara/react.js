import { useState } from 'react'
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'
import Menu from './Componentes/Menu'
import { BrowserRouter, Routes, Route } from 'react-router'
import Rodape from './Componentes/Rodape'

function AppRoutes() {
  return (
    // link para ReactRouter: https://reactrouter.com/start/library/installation


    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='*' element={'Página não encontrada'}/> {/* o path='*' é o elemento coringa para urls nao encontradas */}  
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
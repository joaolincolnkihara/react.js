import { useState } from 'react'
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'
import Menu from './Componentes/Menu'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='*' element={'Página não encontrada'}/> {/* o path='*' é o elemento coringa para urls nao encontradas */}  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
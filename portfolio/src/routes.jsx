import { useState } from 'react'
import Inicio from './paginas/Inicio'
import SobreMim from './paginas/SobreMim'
import Menu from './Componentes/Menu'
import { BrowserRouter, Routes, Route } from 'react-router'
import Rodape from './Componentes/Rodape'
import PaginaPadrao from './Componentes/PaginaPadrao'
import Post from './paginas/Post'

function AppRoutes() {
  return (
    // link para ReactRouter: https://reactrouter.com/start/library/installation


    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/sobremim' element={<SobreMim/>}/>
          <Route path='posts/:id' element={<Post/>}/>
        </Route>
      {/* 
      
        Na rota '/', a estruturaa ser renderizada é:
        <PaginaPadrao>
          <Inicio/>
        </PaginaPadrao>

        Na rota '/sobremim', a estruturaa ser renderizada é:
        <PaginaPadrao>
          <SobreMim/>
        </PaginaPadrao>

        ------------------------------------------------------

        poderia ser usado assim tbm, por conta q o index na primeira route apos o pai representa q é o mesmo path'' que o route pai, ja o path da segunda route apos o pai nao ter o '/' significa que sera relativa a rota pai logo ficará 'path='/sobremim'
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
        </Route>
      */}

        <Route path='*' element={'Página não encontrada'}/> {/* o path='*' é o elemento coringa para urls nao encontradas */}  
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
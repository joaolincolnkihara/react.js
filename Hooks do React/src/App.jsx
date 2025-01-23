import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [endereco, setEndereco] = useState({})

  function manipularEndereco(evento){
    setEndereco({
      cep: evento.target.value
    })

    if(endereco.cep && endereco.cep.length === 8){
      
    }
  }

  return (
    <>
      <input type="text" 
      placeholder='Digite seu cep'
      onChange={manipularEndereco}
      />
      <ul>
        <li>cep: {endereco.cep}</li>
      </ul>
    </>
  )
}

export default App

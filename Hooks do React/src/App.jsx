import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [endereco, setEndereco] = useState({})

  function manipularEndereco(evento){

    const cep = evento.target.value

    setEndereco({
      cep
    })

    if(cep && cep.length === 8){
      //obter cep
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados=>{
          setEndereco(enderecoAntigo => ({
            ...enderecoAntigo,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }))
        })
    }
  }

  return (
    <>
      <input type="text" 
      placeholder='Digite seu cep'
      onChange={manipularEndereco}
      />
      <ul>
        <li>Cep: {endereco.cep}</li>
        <li>Bairro: {endereco.bairro}</li>
        <li>Cidade: {endereco.cidade}</li>
        <li>Estado: {endereco.estado}</li>
      </ul>
    </>
  )
}

export default App

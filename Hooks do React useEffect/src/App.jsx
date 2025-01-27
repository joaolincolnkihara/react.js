import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[racas, setRacas] = useState([])
  const[buscar, setBuscar] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/doguinhos')
      .then(resposta => resposta.json())
      .then(dados => {
        setRacas(dados)
      })
  }, [] )

  useEffect(() => {
    if(buscar && buscar.length > 3){
    fetch('http://localhost:8080/doguinhos?nome=' + buscar)
      .then(resposta => resposta.json())
      .then(dados => {
        setRacas(dados)
      })}
  },[buscar])

  return (
    <>
      <h1>Bem-vindo</h1>
      <h4>Abaixo confira uma lista de doguinhos</h4>
      <input type="text" 
      placeholder='Digite o nome da raça'
      onChange={evento => setBuscar(evento.target.value)}
      />
      <ul>
        {racas.map(raca => <li key={raca.nome}>{raca.nome}</li>)}
      </ul>
      <footer>
      https://gist.githubusercontent.com/viniciosneves/fe92d379336f8133f05db4d6c63d799a/raw/b1758d1910f5b9ff2004f17d125222899bb24448/db.json
      </footer>
    </>
  )
}

export default App

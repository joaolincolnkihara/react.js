import { useState } from 'react'
import Banner from './componente/Banner/Banner'
import Formulario from './componente/Formulario'
import Time from './componente/Time'

function App() {
  const [count, setCount] = useState(0)

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9',
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2',
    },
    {
      nome:'Develops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8',
    },
    {
      nome:'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5',
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9',
    },
    {
      nome:'Innovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF',
    }
  ]

  return (
    <>
      <Banner/>
      <Formulario 
      times = {times.map(times => times.nome)}//Traz a lista de times (times =>times.nome) = times vai retornar times.nome
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
      />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
    </>
  )
}

export default App

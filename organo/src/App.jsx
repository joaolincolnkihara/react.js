import { useState } from 'react'
import Banner from './componente/Banner/Banner'
import Formulario from './componente/Formulario'
import Time from './componente/Time'
import Rodape from './componente/Rodape'
import { v4 as uuidv4 } from 'uuid';
import Colaborador from './componente/Colaborador'

function App() {
  const [count, setCount] = useState(0)

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome:'Programação',
      cor:'#57C278',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Front-End',
      cor:'#82CFFA',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Data Science',
      cor:'#A6D157',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Develops',
      cor:'#E06B69',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'UX e Design',
      cor:'#DB6EBF',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Mobile',
      cor:'#FFBA05',
    },
    {
      id: uuidv4(),
      favorito: false,
      nome:'Innovação e Gestão',
      cor:'#FF8A29',
    }
  ])

    function deletarColaborador(id){
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    const mudarCorDoTime = (cor, id) =>{
      setTimes(times.map(time => {
          if(time.id === id){
            time.cor = cor
          }
          return time;
      }))
    }
    
    function resolverFavorito(id) {
      setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      }))
    }

    function cadastrarTime(novoTime){
      setTimes([...times, {...novoTime, id: uuidv4()}])
    }

  return (
    <>
      <Banner/>
      <Formulario 
      cadastrarTime={cadastrarTime}
      times = {times.map(times => times.nome)}//Traz a lista de times (times =>times.nome) = times vai retornar times.nome
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
      />
      {times.map(time => 
      <Time 
        aoFavorita={resolverFavorito}
        mudarCor={mudarCorDoTime}
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />)}
        <Rodape/>
    </>
  )
}

export default App

import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

function Formulario({aoColaboradorCadastrado, times, cadastrarTime}){

    const[nome, setNome]= useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')
    const[nomeTime, setNomeTime] = useState('')
    const[corTime, setCorTime] = useState('#000000')

    const aoSalvar = (evento) =>{    
        evento.preventDefault() //Tira os comportamentos padrões do navegador(nesse caso não recarrega a pagina ao clicar no botão)
        aoColaboradorCadastrado({
            // nome:nome,
            // cargo:cargo,
            // imagem:imagem,
            // time:time
            nome,
            cargo,
            imagem,
            time,
        })
            setCargo(''),
            setImagem(''),
            setNome(''),
            setTime('')
    }

    return(
        <>
        <section id='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado = {valor => setCargo(valor)}
                />
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem'
                    valor={imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={times}
                    valor = {time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar novo time.</h2>
                <Campo 
                    obrigatorio 
                    label='Nome' 
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado = {valor => setNomeTime(valor)}
                />
                <Campo 
                    obrigatorio
                    type='color'
                    label='Cor' 
                    placeholder='Selecione a cor do time'
                    valor={corTime}
                    aoAlterado = {valor => setCorTime(valor)}
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
        </>
    )
}

export default Formulario

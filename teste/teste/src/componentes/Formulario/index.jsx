import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () =>{

    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('Submetido', nome, cargo, imagem)
    }

    return(
        <form onSubmit={aoSalvar}>
                <CampoTexto
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoClicar = {valor => setNome(valor)}//valor recebe o valor colocado no nome(recebe o valor so q atualizado)
                />
                <CampoTexto
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoClicar = {valor => setCargo(valor)}
                />
                <CampoTexto
                    label='imagem'
                    placeholder='Insira sua imagem'
                    valor={imagem}
                    aoCLicar = {valor => setImagem(valor)}
                />
                <Botao>Clique aqui</Botao>
        </form>
    )
}

export default Formulario
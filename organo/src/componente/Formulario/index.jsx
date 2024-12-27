import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

function Formulario(){
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Develops',
        'UX e Design',
        'Mobile',
        'Innovação e Gestão'
    ]

    const aoSalvar = (evento) =>{    
        evento.preventDefault() //Tira os comportamentos padrões do navegador(nesse caso não recarrega a pagina ao clicar no botão)
        console.log('form foi submetido')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome'/>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem'/>
                <ListaSuspensa obrigatorio={true} label='Time' itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
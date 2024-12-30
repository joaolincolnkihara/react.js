import './Botao.css'

function Botao(props){
    return(
        //props.children vai puxar oq esta dentro ddo abrimento e fechamneto dos parenteses do Botao no App.jsx
        <div className="contain">
            <button className='botao'>{props.children}</button>
        </div>
    )
}

export default Botao

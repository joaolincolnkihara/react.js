import './Botao.css'

const Botao = (props) =>{
    return(
        <div className="container">
            <button>{props.children}</button>
        </div>
    )
}

export default Botao

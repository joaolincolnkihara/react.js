import './CampoTexto.css'

const CampoTexto = (props) =>{

    const aoDigitado = (evento) =>{
        props.aoClicar(evento.target.value)
    }
    return(

        <div className="container">
            <label>{props.label}</label>
            <input 
                type="text" 
                placeholder={props.placeholder}
                value = {props.valor}
                onChange={aoDigitado}
            />
        </div>
    )
}

export default CampoTexto
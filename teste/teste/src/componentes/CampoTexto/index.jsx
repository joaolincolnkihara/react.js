import './CampoTexto.css'

const CampoTexto = (props) =>{

    const aoDigitado = (evento) =>{
        props.aoClicar(evento.target.value) //para pegar o valor do input
    }
    return(

        <div className="container">
            <label>{props.label}</label>
            <input 
                type="text" 
                placeholder={props.placeholder}
                value = {props.valor}
                onChange={aoDigitado} //pega os valores que estao sendo digitados no input
            />
        </div>
    )
}

export default CampoTexto
import "./CampoTexto.css"

function CampoTexto(props){
    
    const aoDigitado = (evento) =>{
        console.log(evento.target.value) //Pega o valor que esta sendo digitado
    }

    return(
        <div className="container">
                <label>{props.label}</label>
                    <input type="text" required={props.obrigatorio} //se obrigatorio for true required sera ativado
                    placeholder={props.placeholder}
                    onChange={aoDigitado} //onChange = toda vez q o usuario mexer no input algo acontecerá
                    />
        </div>
    )
}

export default CampoTexto
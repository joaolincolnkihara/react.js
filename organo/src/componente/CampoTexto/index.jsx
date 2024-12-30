import { useState } from "react"
import "./CampoTexto.css"

function CampoTexto(props){
    
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="container">
                <label>{props.label}</label>
                    <input type="text" 
                    required={props.obrigatorio} //se obrigatorio for true required sera ativado
                    placeholder={props.placeholder}
                    value = {props.valor}
                    onChange={aoDigitado} //onChange = toda vez q o usuario mexer no input algo acontecerá
                    />
        </div>
    )
}

export default CampoTexto
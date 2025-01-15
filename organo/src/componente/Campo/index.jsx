import { useState } from "react"
import "./Campo.css"

function Campo({type="text" ,label, obrigatorio, placeholder, valor}){
    
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        // className={`container container-${type}`} : para ter a diiferenciação entre type text (q é o geral) e type color 
        <div className={`container container=${type}`}> 
                <label>{label}</label>
                    <input 
                    type={type}
                    required={obrigatorio} //se obrigatorio for true required sera ativado
                    placeholder={placeholder}
                    value = {valor}
                    onChange={aoDigitado} //onChange = toda vez q o usuario mexer no input algo acontecerá
                    />
        </div>
    )
}

export default Campo
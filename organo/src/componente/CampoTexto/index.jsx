import "./CampoTexto.css"

function CampoTexto(props){
    return(
        <div className="container">
                <label for="">{props.label}</label>
                    <input type="text" name="" id="" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto
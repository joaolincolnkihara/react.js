import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return(
        (props.colaboradores.length >0) ? <section className='time' style={css}>
            <input onChange={cacete => mudarCor(cacete.target.value)} value={props.corSecundaria} type="color" className='input-color'/>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                {return <Colaborador
                    corDeFundo={props.corPrimaria}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    aoDeletar={props.aoDeletar}
                />})}
            </div>
        </section>
        : ''
        // O: "(exemplo) ? <TESTE> :''"  Funciona como um if/else, tambem pode ser usado: "(exemplo) && <Teste>"
    )
}

export default Time
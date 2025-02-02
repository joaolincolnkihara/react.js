import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {

    const css = {backgroundColor: hexToRgba(props.cor, '0.6')}

    return(
        (props.colaboradores.length >0) ? <section className='time' style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type="color" className='input-color'/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                {return <Colaborador
                    corDeFundo={props.cor}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    aoDeletar={props.aoDeletar}
                    aoFavoritar={props.aoFavoritar}
                />})}
            </div>
        </section>
        : ''
        // O: "(exemplo) ? <TESTE> :''"  Funciona como um if/else, tambem pode ser usado: "(exemplo) && <Teste>"
    )
}

export default Time
import { IoMdCloseCircle, IoMdHeart, IoMdHeartEmpty  } from "react-icons/io";
import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar, colaborador, aoFavoritar}) =>{
    function favoritar(){
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <IoMdCloseCircle 
                    size={25} 
                    className="deletar" 
                    onClick={() => aoDeletar(Colaborador.id)}/>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                {colaborador?.favorito 
                    ? <IoMdHeart {...propsfavorito} color="#ff0000"/> 
                    : <IoMdHeartEmpty {...propsfavorito}/>}
                </div>
            </div> 
        </div>
    )
}

export default Colaborador
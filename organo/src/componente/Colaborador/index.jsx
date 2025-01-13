import { IoMdCloseCircle } from "react-icons/io";
import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar}) =>{
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
            </div>
        </div>
    )
}

export default Colaborador
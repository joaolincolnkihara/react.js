import { useNavigate } from 'react-router';
import BotaoPrincipal from '../../Componentes/BotaoPrincipal';
import styles from './Erro.module.css'
import erro404 from "./erro_404.png";

function Erro(){

    const navegar = useNavigate()

    return(
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div className={styles.botaoContainer}
                 onClick={() => navegar(-1)}
                //  navegar('/') = voltar para a pagina /
                // navegar(-1) = voltar oara a ultima pagina carregada
                >
                    <BotaoPrincipal tamanho='lg' botao={'Voltar'}/>
                </div>
                <img className={styles.imagemCachorro}
                    src={erro404}
                    alt="" />
            </div>
            <div className={styles.espacoEmBranco}>
            </div>
        </>
    )
}

export default Erro
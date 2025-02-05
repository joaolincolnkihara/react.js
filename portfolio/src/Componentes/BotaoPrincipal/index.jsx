import styles from './BotaoPrincipal.module.css'

function BotaoPrincipal({botao, tamanho}){
    return(
        <button className={`
        ${styles.botao}
        ${styles[tamanho]}
        `}>
            {botao}
        </button>
    )
}

export default BotaoPrincipal
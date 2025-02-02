import { Route, Routes } from 'react-router'
import styles from './Post.module.css'

function Post({post}){
    return(
        <div className={styles.post}>
            <img className={styles.capa} 
                src={`/assets/posts/${post.id}/capa.png`} 
                alt="Imagem da capa do post" 
            />

            <h2 className={styles.titulo}>
                {post.titulo}
            </h2>

            <button className={styles.botaoLer}>
                Ler
            </button>
        </div>
    )
}

export default Post
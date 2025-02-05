import { Link } from 'react-router'
import styles from './Post.module.css'
import BotaoPrincipal from '../BotaoPrincipal'

function PostCard({post}){
    return(
        <div className={styles.post}>
            <img className={styles.capa} 
                src={`/assets/posts/${post.id}/capa.png`} 
                alt="Imagem da capa do post" 
            />

            <h2 className={styles.titulo}>
                {post.titulo}
            </h2>

            <Link to={`/posts/${post.id}`}>
                <BotaoPrincipal botao={'Ler'}/>
            </Link>
        </div>
    )
}

export default PostCard
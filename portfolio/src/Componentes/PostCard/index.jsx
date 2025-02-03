import { Link } from 'react-router'
import styles from './Post.module.css'

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
                <button className={styles.botaoLer}>
                    Ler
                </button>
            </Link>
        </div>
    )
}

export default PostCard
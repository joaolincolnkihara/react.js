import styles from './Banner.module.css'

function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola-Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou João Lincoln, desenvolvedor front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src='src/assets/circulo_colorido.png'
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src='src/assets/user.jpg'
                    alt='Foto de João'
                />
            </div>
        </div>
    )
}

export default Banner
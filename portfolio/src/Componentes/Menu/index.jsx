import styles from './Menu.module.css'

function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <a className={styles.link} href="/">
                Início
                </a>
                <a className={styles.link} href="/sobremim">
                Sobre mim
                </a>
            </nav>
        </header>
    )
}

export default Menu
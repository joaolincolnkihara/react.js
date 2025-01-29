import { Link, useLocation } from 'react-router'
import styles from './MenuLink.module.css'

function MenuLink( {children ,to} ){
    //o useLocation funciona como o 'window.location' que serve para pegar informações como pathname
    const localizacao = useLocation()

    return(
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
            `} to={to}>
            {children}
        </Link>
    )
}

export default MenuLink
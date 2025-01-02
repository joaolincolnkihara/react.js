import './Rodape.css'

const Rodape = () => {
    return(
        <footer>
            {/* <img src="public/imagens/fundo.png" alt="Fundo" /> */}
            <div className="redes">
                <img src="public/imagens/fb.png" alt="Facebook" />
                <img src="public/imagens/tw.png" alt="Twitter" />
                <img src="public/imagens/ig.png" alt="Instagram" />
            </div>
            <div className="organo">
                <img src="public/imagens/logo.png" alt="Organo" />
            </div>
            <div className="desenvolvido">
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape
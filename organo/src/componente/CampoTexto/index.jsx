import "./CampoTexto.css"

function CampoTexto(){
    return(
        <div className="container">
            <form action="">
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <label for="inome">Nome</label>
                    <input type="text" name="nome" id="inome" placeholder="Digite seu nome" class="input"/>
                <label for="icargo">Cargo</label>
                    <input type="text" name="cargo" id="icargo" placeholder="Digite seu cargo" class="input"/>
                <label for="iimagem">Imagem</label>
                    <input type="text" name="imagem" id="iimagem" placeholder="Coloque sua imagem" class="input"/>
                <label for="itime">Time</label>
                    <select name="time" id="itime" class="input">
                        <option value="teste"></option>
                    </select>
            </form>
        </div>
    )
}

export default CampoTexto
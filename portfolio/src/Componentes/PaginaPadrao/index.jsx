import { Outlet } from "react-router"
import Banner from "../Banner"

function PaginaPadrao(){
    return(
        <main>
            <Banner/>

            <Outlet/>
            {/* Renderiza o conteudo da rota */}
        </main>
    )
}

export default PaginaPadrao
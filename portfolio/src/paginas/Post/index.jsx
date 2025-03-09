import { Route, Routes, useParams } from "react-router"
import posts from '../../json/posts.json'
import PostModelo from "../../Componentes/PostModelo"
import './post.css'
import Erro from "../Erro"
import PaginaPadrao from "../../Componentes/PaginaPadrao"

function Post(){

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if(!post){
        return(
            <Erro/>
        )
    }
    //o Number em parametro é para retornar o id como numero não como string, ja q o posts.json esta como numerico
    // se post.id for o msm id q parametros.id o metodo find retornara o elemento para a constante post;
    // o .find recebe uma função q sera executada para cada um dos elementos de json/posts.json, onde deve ser retornado com valor true ou false, sendo o valor true retornara o elemento

    return(
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                  <Route index element={
                        <PostModelo
                        fotoCapa={`../assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >   
                        <div className="post-markdown-container">
                            {post.texto}
                        </div>
                        {/* o Texto de posts.json foi escrita em markdown */}
                        </PostModelo> }
                />
            </Route>
            
        </Routes>
        
    )
}

export default Post
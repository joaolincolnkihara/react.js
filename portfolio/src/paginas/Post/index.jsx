import { useParams } from "react-router"

function Post(){

    const parametros = useParams

    console.log(parametros)

    return(
        <h2>Post..</h2>
    )
}

export default Post
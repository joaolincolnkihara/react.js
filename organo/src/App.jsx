import { useState } from 'react'
import Banner from './componente/Banner/Banner'
import Formulario from './componente/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Formulario/>
    </>
  )
}

export default App

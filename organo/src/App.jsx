import { useState } from 'react'
import Banner from './componente/Banner/Banner'
import CampoTexto from './componente/CampoTexto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <CampoTexto/>
    </>
  )
}

export default App

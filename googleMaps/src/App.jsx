import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mapa from './Mapa';
import './App.css'
import MapaConClusters from './MapaConClusters';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="App">
        <h1>Mapa con Google Maps</h1>
        <Mapa />
      </div>

      <div className="App">
        <h1>Mapa con Clusters</h1>
        <MapaConClusters />
      </div>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Cinnamon } from './components/Cinnamon'
import { data } from './data'
import { Lobby } from './components/Lobby'

function App() {

  return (
    <div className="w-dvw h-dvh flex justify-center items-center bg-slate-800 border border-red-700">
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/cinnamon" element={<Cinnamon data={data.slice(0, 5)} />} />
      </Routes>
    </div>
  )
}

export default App

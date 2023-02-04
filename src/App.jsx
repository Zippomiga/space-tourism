import './app.css'
import Crew from './components/Crew/Crew'
import Destination from './components/Destinations/Destination'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import JSON from './data.json'
import Subtitle from './components/Subtitle/Subtitle'
import Technology from './components/Technology/Technology'
import { useState } from 'react'


export default function App() {
  const [page, setPage] = useState('00 Home')
  const [{ bg, subtitle }] = JSON[page]

  function surf(e) {
    setPage(e.target.id)
  }

  const screen = {
    0: <Home surf={surf} />,
    1: <Destination />,
    2: <Crew />,
    3: <Technology />
  }

  return (
    <main className={'bg ' + bg}>
      <Header surf={surf} />
      <Subtitle sub={subtitle} />
      {screen[page.slice(1, 2)]}
    </main>
  )
}
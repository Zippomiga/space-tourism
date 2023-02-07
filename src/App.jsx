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
  const [topic, setTopic] = useState('00 Home')
  const [{ bg, subtitle }] = JSON[topic]

  function surf(e) {
    setTopic(e.target.id)
  }

  const page = [
    <Home surf={surf} />,
    <Destination />,
    <Crew />,
    <Technology />
  ]

  return (
    <main className={'bg ' + bg}>
      <Header surf={surf} />
      <Subtitle sub={subtitle} />
      {page[topic.slice(1, 2)]}
    </main>
  )
}
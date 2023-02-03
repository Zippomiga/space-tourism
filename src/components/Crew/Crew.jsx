import './crew.css'
import Article from '../Article/Article'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { useState } from 'react'
import DouglasHurley from '../../assets/crew/image-Douglas-Hurley.webp'
import MikeShuttleworth from '../../assets/crew/image-Mark-Shuttleworth.webp'
import VictorGlover from '../../assets/crew/image-Victor-Glover.webp'
import AnoushehAnsari from '../../assets/crew/image-Anousheh-Ansari.webp'

export default function Crew() {
  const [crew, setCrew] = useState(0)

  const data = JSON['02 Crew'][1]
  const tabs = data.map(tab => tab.name)
  const { name, role, bio } = data[crew]

  const src = [DouglasHurley, MikeShuttleworth, VictorGlover, AnoushehAnsari]

  return (
    <section className='crew'>
      <aside className='crew-info'>
        <Article
          classH4='crew-role'
          h4={role}
          classH2='crew-expert'
          h2={name}
          classP='crew-description'
        >
          {bio}
        </Article>
        <NavTabs
          tabs={tabs}
          classNav='crew-nav'
          classDiv='crew-tab'
          onClick={(e) => setCrew(tabs.indexOf(e.target.id))}
        />
      </aside>
      <Illustration
        classImg='crew-img'
        src={src[crew]}
        alt={name}
      />
    </section>
  )
}
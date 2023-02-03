import './crew.css'
import Article from '../Article/Article'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { useState } from 'react'


export default function Crew() {
  const [crew, setCrew] = useState(0)

  const data = JSON['02 Crew'][1]
  const tabs = data.map(tab => tab.name)
  const { name, role, bio } = data[crew]

  return (
    <section className='crew'>
      <aside className='crew-info'>
        <Article
          classH4='crew-role'
          h4={role}
          classH2='crew-expert'
          h2={name.replace('-', ' ')}
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
        src={`../src/assets/crew/image-${name}.webp`}
        alt={name}
      />
    </section>
  )
}
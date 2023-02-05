import './crew.css'
import Article from '../Article/Article'
import Illustration from '../Illustrations/Illustration'
import NavTabs from '../NavTabs/NavTabs'
import { getData, SRC } from '../../sources'
import { useState } from 'react'


export default function Crew() {
  const [crew, setCrew] = useState(0)

  const data = getData('02 Crew')
  const tabs = data.map(tab => tab.name)
  const { role, name, bio } = data[crew]

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
        src={SRC.Crew[crew]}
        alt={name}
      />
    </section>
  )
}
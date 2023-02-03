import './crew.css'
import Article from '../Article/Article'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { SRC } from '../../sources'
import { useState } from 'react'


export default function Crew() {
  const [crew, setCrew] = useState(0)

  const data = JSON['02 Crew'][1]
  const tabs = data.map(tab => tab.name)

  return (
    <section className='crew'>
      <aside className='crew-info'>
        <Article
          classH4='crew-role'
          h4={data[crew].role}
          classH2='crew-expert'
          h2={data[crew].name}
          classP='crew-description'
        >
          {data[crew].bio}
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
        alt={data[crew].name}
      />
    </section>
  )
}
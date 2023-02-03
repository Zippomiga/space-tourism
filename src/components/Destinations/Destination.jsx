import './destination.css'
import Article from '../Article/Article'
import Footer from './Footer'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { useState } from 'react'


export default function Destination() {
  const [destiny, setDestiny] = useState(0)

  const data = JSON['01 Destination'][1]
  const tabs = data.map(tab => tab.name)
  const { name, description, travel, distance } = data[destiny]

  return (
    <section className='destination'>
      <aside className='destination-info'>
        <NavTabs
          tabs={tabs}
          classNav='destination-nav'
          classDiv='destination-tab'
          onClick={(e) => setDestiny(tabs.indexOf(e.target.id))}
        />
        <Article
          classH2='destination-title'
          h2={name}
          classP='destination-description'
        >
          {description}
        </Article>
        <footer className='footer-distance-time'>
          <Footer span='Avg. Distance' strong={distance} />
          <Footer span='Est. Travel Time' strong={travel} />
        </footer>
      </aside>
      <Illustration
        classImg='destination-img'
        src={`../src/assets/destination/image-${name}.webp`}
        alt={name}
      />
    </section>
  )
}
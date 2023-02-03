import './destination.css'
import Article from '../Article/Article'
import Footer from './Footer'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { useState } from 'react'
import Moon from '../../assets/destination/image-Moon.webp'
import Mars from '../../assets/destination/image-Mars.webp'
import Europa from '../../assets/destination/image-Europa.webp'
import Titan from '../../assets/destination/image-Titan.webp'


export default function Destination() {
  const [destiny, setDestiny] = useState(0)

  const data = JSON['01 Destination'][1]
  const tabs = data.map(tab => tab.name)
  const { name, description, travel, distance } = data[destiny]

  const src = [Moon, Mars, Europa, Titan]

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
        src={src[destiny]}
        alt={name}
      />
    </section>
  )
}
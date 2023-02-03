import './destination.css'
import Article from '../Article/Article'
import Footer from './Footer'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { SRC } from '../../sources'
import { useState } from 'react'


export default function Destination() {
  const [destiny, setDestiny] = useState(0)

  const data = JSON['01 Destination'][1]
  const tabs = data.map(tab => tab.name)

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
          h2={data[destiny].name}
          classP='destination-description'
        >
          {data[destiny].description}
        </Article>
        <footer className='footer-distance-time'>
          <Footer span='Avg. Distance' strong={data[destiny].distance} />
          <Footer span='Est. Travel Time' strong={data[destiny].travel} />
        </footer>
      </aside>
      <Illustration
        classImg='destination-img'
        src={SRC.Destination[destiny]}
        alt={data[destiny].name}
      />
    </section>
  )
}
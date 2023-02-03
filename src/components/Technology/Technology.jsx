import './technology.css'
import Article from '../Article/Article'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { useEffect, useState } from 'react'
import LaunchVehicle_P from '../../assets/technology/image-Launch-Vehicle-portrait.jpg'
import Spaceport_P from '../../assets/technology/image-Spaceport-portrait.jpg'
import SpaceCapsule_P from '../../assets/technology/image-Space-Capsule-portrait.jpg'
import LaunchVehicle_L from '../../assets/technology/image-Launch-Vehicle-landscape.jpg'
import Spaceport_L from '../../assets/technology/image-Spaceport-landscape.jpg'
import SpaceCapsule_L from '../../assets/technology/image-Space-Capsule-landscape.jpg'


const src = {
  'portrait': {
    0: LaunchVehicle_P,
    1: Spaceport_P,
    2: SpaceCapsule_P
  },
  'landscape': {
    0: LaunchVehicle_L,
    1: Spaceport_L,
    2: SpaceCapsule_L
  }
}

export default function Technology() {
  const [tech, setTech] = useState(0)
  const [width, setWidth] = useState(screen.width)

  const data = JSON['03 Technology'][1]
  const { name, description } = data[tech]

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(screen.width))
  }, [width])

  return (
    <section className='technology'>
      <aside className='technology-info'>
        <NavTabs
          tabs={[1, 2, 3]}
          classNav='technology-nav'
          classDiv='technology-tab'
          onClick={(e) => setTech(e.target.id -1)}
        />
        <Article
          classH4='technology-spoiler'
          h4='The terminology...'
          classH2='technology-ship'
          h2={name}
          classP='technology-description'
        >
          {description}
        </Article>
      </aside>
      <Illustration
        classImg='technology-img tablet-mobile'
        src={src[width > 768 ? 'portrait' : 'landscape'][tech]}
        alt={name}
      />
    </section>
  )
}
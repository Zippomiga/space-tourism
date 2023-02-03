import './technology.css'
import Article from '../Article/Article'
import Illustration from '../Illustrations/Illustration'
import JSON from '../../data.json'
import NavTabs from '../NavTabs/NavTabs'
import { useEffect, useState } from 'react'


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
          h2={name.replace('-', ' ')}
          classP='technology-description'
        >
          {description}
        </Article>
      </aside>
      <Illustration
        classImg='technology-img tablet-mobile'
        src={`../src/assets/technology/image-${name}-${width > 768 ? 'portrait' : 'landscape'}.jpg`}
        alt={name}
      />
    </section>
  )
}
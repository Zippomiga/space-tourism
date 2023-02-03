import './home.css'
import Article from '../Article/Article'
import JSON from '../../data.json'


export default function Home({ surf }) {
  const { name, intro, description } = JSON['00 Home'][1]

  return (
    <section className='home' >
      <Article
        classH4='home-travel'
        h4={intro}
        classH2='home-space'
        h2={name}
        classP='home-description'
      >
        {description}
      </Article>
      <button className='btn' onClick={surf} id='01 Destination'>
        Explore
      </button>
    </section>
  )
}
import './home.css'
import Article from '../Article/Article'
import { getData } from '../../sources'


export default function Home({ surf }) {
  const { name, intro, description } = getData('00 Home')

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
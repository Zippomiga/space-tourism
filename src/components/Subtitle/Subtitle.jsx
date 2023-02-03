import './subtitle.css'


export default function Subtitle({ sub }) {
  return sub && (
    <h4 className='subtitle'>
      <span className='number'>
        {sub.slice(0, 2)}
      </span>
      {sub.slice(3)}
    </h4>
  )
}
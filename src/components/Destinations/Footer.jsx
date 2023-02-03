import './footer.css'


export default function Footer({ span, strong }) {
  return (
    <div className='footer-info'>
      <span>
        {span}
      </span>
      <strong>
        {strong}
      </strong>
    </div>
  )
}
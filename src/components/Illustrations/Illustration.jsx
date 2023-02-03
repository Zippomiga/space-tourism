import './illustration.css'

export default function Illustration({ classImg, src, alt }) {
  return (
    <img className={classImg} src={src} alt={alt} />
  )
}
export default function Article({ classH4, h4, classH2, h2, classP, children }) {
  return (
    <article>
      <h4 className={classH4}>
        {h4}
      </h4>
      <h2 className={classH2}>
        {h2}
      </h2>
      <p className={classP}>
        {children}
      </p>
    </article>
  )
}
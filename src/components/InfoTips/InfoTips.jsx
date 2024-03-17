export const InfoTips = ({ tip }) => {
  return (
    <article>
      {
        tip &&
        <p>{ tip }</p>
      }
    </article>
  )
}

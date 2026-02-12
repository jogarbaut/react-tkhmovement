import { memo } from "react"

const InformationCard = ({ information }) => {
  return (
    <article className="information">
      <div className="icon-container d-flex mx-auto">
        <img className="icon" src={require(`../assets/icons/${information.icon}`)} alt={information.title} />
      </div>

      <h2>{information.title}</h2>
      <small className="text-brand">{information.subtitle}</small>
      <p className="mb-0">{information.description_1}</p>
      <p className="mb-0">{information.description_2}</p>
    </article>
  )
}

export default memo(InformationCard)

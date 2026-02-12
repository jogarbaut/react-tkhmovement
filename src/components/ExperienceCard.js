import { memo } from "react"

const ExperienceCard = ({ experience }) => {
  return (
    <article className="about-card experience">
      <h2>{experience.title}</h2>
      <small className="text-brand">{experience.position}</small>
      <p className="mb-0">{experience.time}</p>
    </article>
  )
}

export default memo(ExperienceCard)
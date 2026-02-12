import { memo } from 'react'

const EducationCard = ({ education }) => {
  return (
    <article className="about-card education">
      <h2>{education.school}</h2>
      <small className="text-brand">{education.program}</small>
      <p className="mb-0">{education.time}</p>
      <p className="mb-0">{education.other}</p>
    </article>
  )
}

export default memo(EducationCard)
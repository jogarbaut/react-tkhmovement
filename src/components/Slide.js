import { GrStar } from "react-icons/gr"

const Slide = ({ data }) => {
  const renderedStars = []

  for (let i = 0; i < data.stars; i++) {
    renderedStars.push(<GrStar className="text-primary-500 text-lg" />)
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 text-sm overflow-y-auto">
      <div className="font-bold">{data.name}</div>
      <div className="flex gap-1 text-sm">{renderedStars}</div>
      <div className="font-light">{data.text}</div>
    </div>
  )
}

export default Slide

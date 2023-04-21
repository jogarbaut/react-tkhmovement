
const Slide = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="font-bold">
        {data.stars}
      </div>
      <div className="font-bold">
        {data.name}
      </div>
      <div className="font-light">
        {data.text}
      </div>
    </div>
  )
}

export default Slide

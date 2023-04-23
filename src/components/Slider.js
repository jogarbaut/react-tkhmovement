import { useState } from "react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import Slide from "./Slide"

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextArrowClick = () => {
    const isLastSlide = currentIndex === data.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const handlePreviousArrowClick = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="w-full h-full rounded-xl bg-center bg-cover relative">
      <div
        className="absolute top-1/2 text-2xl left-4 rounded p-2 bg-primary-500/50 hover:bg-primary-500 text-white cursor-pointer hover:duration-300 duartion-300"
        onClick={handlePreviousArrowClick}
      >
        <GoChevronLeft />
      </div>
      <div
        className="absolute top-1/2 right-4 text-2xl rounded p-2 bg-primary-500/50 hover:bg-primary-500 text-white cursor-pointer hover:duration-300 duration-300"
        onClick={handleNextArrowClick}
      >
        <GoChevronRight />
      </div>
      <div className="h-1/2 max-h-96 w-full mx-auto transition duration-500 px-16 md:px-32 m-16 overflow-y-auto">
        <Slide data={data[currentIndex]} />
        {/* {slides[currentIndex].testimonial} */}
      </div>
    </div>
  )
}

export default Slider

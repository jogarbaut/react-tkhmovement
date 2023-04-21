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
    <div className="w-full h-full rounded-xl bg-center bg-cover relative group">
      <div
        className="hidden group-hover:block absolute top-1/2 text-2xl left-0 rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={handlePreviousArrowClick}
      >
        <GoChevronLeft />
      </div>
      <div
        className="hidden group-hover:block absolute top-1/2 right-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={handleNextArrowClick}
      >
        <GoChevronRight />
      </div>
      <div className="h-48 border border-red-500 w-3/4 mx-auto duration-500 ease-in-out">
        <Slide data={data[currentIndex]} />
        {/* {slides[currentIndex].testimonial} */}
      </div>
    </div>
  )
}

export default Slider

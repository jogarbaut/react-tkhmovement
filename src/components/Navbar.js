import { useEffect, useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import logo from "../assets/logo.png"
import { GoThreeBars, GoX } from "react-icons/go"
import NavLink from "./NavLink"

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isUserTopOfPage, setIsUserTopOfPage] = useState(false)

  const isSmallScreenAndAbove = useMediaQuery("(min-width:768px)")

  const navbarBackground = isUserTopOfPage
    ? ""
    : "bg-white drop-shadow-xl transition duration-500"

  const [isMenuToggled, setIsMenuToggled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsUserTopOfPage(true)
      } else {
        setIsUserTopOfPage(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const renderedFullNavbar = (
    <>
      <div className="flex items-center justify-between gap-8 text-sm">
        <NavLink
          to="home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          About
        </NavLink>
        <NavLink
          to="clinic"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Clinic Information
        </NavLink>
        <NavLink
          to="services"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Services & Scheduler
        </NavLink>
        <NavLink
          to="videos"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Videos
        </NavLink>
        <NavLink
          to="testimonials"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        >
          Testimonials
        </NavLink>
      </div>
      <div className="flex items-center justify-between gap-8">
        <p>IG</p>
        <p>YP</p>
        <p>YP</p>
      </div>
    </>
  )

  const renderedMinimizedNavbar = (
    <button
      className="rounded-full bg-primary-500 p-2"
      onClick={() => setIsMenuToggled(!isMenuToggled)}
    >
      <GoThreeBars className="h-6 w-6 text-white" />
    </button>
  )

  const renderedNavbarModal = (
    <div className="fixed right-0 left-0 z-20 min-h-min top-0 w-full bg-white drop-shadow-xl">
      <div className="flex justify-between pt-6 px-4">
        <div className="max-w-[120px]">
          <img src={logo} alt="logo" className="w-full h-auto object-contain" />
        </div>
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <GoX className="h-6 w-6 text-gray-400" />
        </button>
      </div>
      <div className="ml-4 flex flex-col gap-4 text-sm py-4">
        <NavLink to="home">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="clinic">Clinic Information</NavLink>
        <NavLink to="services">Services & Scheduler</NavLink>
        <NavLink to="videos">Videos</NavLink>
        <NavLink to="testimonials">Testimonials</NavLink>
        <div className="flex gap-4 justify-start">
          <p>IG</p>
          <p>YP</p>
          <p>YP</p>
        </div>
      </div>
    </div>
  )

  return (
    <nav className="w-full">
      <div
        className={`${navbarBackground} fixed top-0 z-10 flex w-full py-4 transition duration-300`}
      >
        <div className="flex flex-row items-center justify-between max-w-7xl w-full mx-auto px-4">
          <div className="max-w-[120px]">
            <img
              src={logo}
              alt="logo"
              className="w-full h-auto object-contain"
            />
          </div>
          {isSmallScreenAndAbove ? renderedFullNavbar : renderedMinimizedNavbar}
        </div>
      </div>
      {!isSmallScreenAndAbove && isMenuToggled && renderedNavbarModal}
    </nav>
  )
}

export default Navbar

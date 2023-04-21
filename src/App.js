import AboutPage from "./pages/AboutPage"
import ClinicInformationPage from "./pages/ClinicInformationPage"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SchedulerPage from "./pages/SchedulerPage"
import TestimonialsPage from "./pages/TestimonialsPage"
import VideosPage from "./pages/VideosPage"
import { useState } from "react"

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')

  return (
    <div className="w-full">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className="max-w-5xl mx-auto">
        <AboutPage setSelectedPage={setSelectedPage} />
        <ClinicInformationPage setSelectedPage={setSelectedPage} />
        <SchedulerPage setSelectedPage={setSelectedPage} />
        {/* <VideosPage /> */}
        <TestimonialsPage setSelectedPage={setSelectedPage} />
      </div>
      <Footer />
    </div>
  )
}

export default App

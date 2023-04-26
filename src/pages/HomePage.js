import { motion } from "framer-motion"
import Button from "../components/Button"
import introVideo from "../assets/introVideo.mp4"

const HomePage = ({ setSelectedPage }) => {
  return (
    <section id="home" className="w-full h-screen relative">
      <video
        src={introVideo}
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-full object-cover object-center"
      />
      <div className="bg-slate-900/20 w-full h-full flex absolute justify-start items-center px-[10%] inset-0">
        <motion.div onViewportEnter={() => setSelectedPage("home")}>
          <div className="flex flex-col gap-4">
            <div className="text-3xl text-white">Learn the Tools</div>
            <div className="text-lg text-white">
              to build a resilient body and live a pain-free life
            </div>
            <div className="flex">
              <Button primary>Schedule an Appointment</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomePage

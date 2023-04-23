import { motion } from "framer-motion"
import Button from "../components/Button"

const HomePage = ({ setSelectedPage }) => {
  return (
    <section id="home" className="w-full h-screen bg-red-300">
      <div className="bg-slate-200/70 w-full h-full flex justify-start items-center pl-[10%]">
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

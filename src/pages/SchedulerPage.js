import Accordion from "../components/Accordion"
import AccordionAlt from "../components/AccordionAlt"
import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import { newPatientServiceData, patientServiceData } from "../data/serviceData"
import { motion } from "framer-motion"

const SchedulerPage = ({ setSelectedPage }) => {
  return (
    <section id="services" className="w-full">
      <motion.div onViewportEnter={() => setSelectedPage("services")}>
        <SectionTitle>Services & Scheduler</SectionTitle>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="basis-1/2">
          <AccordionAlt items={newPatientServiceData} />
        </div>
        <div className="basis-1/2">
          <Accordion items={patientServiceData} />
        </div>
      </div>
    </section>
  )
}

export default SchedulerPage

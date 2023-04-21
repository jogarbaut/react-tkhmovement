import Box from "../components/Box"
import SectionTitle from "../components/SectionTitle"
import { informationData } from "../data/informationData"
import { motion } from "framer-motion"

const ClinicInformationPage = ({ setSelectedPage }) => {
  return (
    <section id="clinic">
      <motion.div onViewportEnter={() => setSelectedPage("clinic")}>
        <SectionTitle>Clinic Information</SectionTitle>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        {informationData.map((dataItem) => {
          return (
            <Box
              key={dataItem.id}
              title={dataItem.title}
              subtitle={dataItem.subtitle}
              description_1={dataItem.description_1}
              description_2={dataItem.description_2}
              icon={dataItem.icon}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ClinicInformationPage

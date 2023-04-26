import Bullet from "../components/Bullet"
import SectionTitle from "../components/SectionTitle"
import {
  certificationData,
  educationData,
  experienceData,
} from "../data/aboutData"
import { aboutData } from "../data/textData"
import headshot from "../assets/headshot.png"
import { motion } from "framer-motion"

const AboutPage = ({setSelectedPage}) => {
  const data = [educationData, experienceData, certificationData]

  return (
    <section id="about" className="w-full">
      <motion.div onViewportEnter={() => setSelectedPage('about')}>
        <SectionTitle>About Dr. Takashi Kumagai Huynh, D.C.</SectionTitle>
      </motion.div>
      <div className="flex md:flex-row flex-col gap-8">
        <div className="basis-1/2 p-4">
          {aboutData.map((dataItem) => {
            return <p key={dataItem.id}>{dataItem.text}</p>
          })}
        </div>
        <div className="basis-1/2">
          <img
            src={headshot}
            className="h-full max-h-96 w-full object-contain object-center"
            alt="Doctor Headshot"
          />
        </div>
      </div>

      <SectionTitle>Education, Experience, & Certifications</SectionTitle>
      <div className="flex flex-col md:flex-row gap-8">
        {data.map((dataCategory) => {
          return (
            <div className="flex flex-col items-start md:mx-auto ml-8 md:ml-0">
              {dataCategory.map((dataItem) => {
                return (
                  <Bullet
                    key={dataItem.id}
                    title={dataItem.title}
                    subtitle={dataItem.subtitle}
                    time={dataItem.time}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AboutPage

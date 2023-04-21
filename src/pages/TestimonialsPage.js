import SectionTitle from "../components/SectionTitle"
import Slider from "../components/Slider"
import { testimonialData } from "../data/testimonialData"
import { motion } from "framer-motion"

const TestimonialsPage = ({ setSelectedPage }) => {
  return (
    <section id="testimonials">
      <motion.div onViewportEnter={() => setSelectedPage("testimonials")} >
        <SectionTitle>Testimonials</SectionTitle>
      </motion.div>

      <Slider data={testimonialData} />
    </section>
  )
}

export default TestimonialsPage

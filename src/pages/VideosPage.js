import SectionTitle from "../components/SectionTitle"
import VideoBox from "../components/VideoBox"
import { videoData } from "../data/videoData"
import { motion } from "framer-motion"

const VideosPage = ({ setSelectedPage }) => {
  return (
    <section id="videos" className="w-full">
      <motion.div onViewportEnter={() => setSelectedPage("videos")}>
        <SectionTitle>Videos</SectionTitle>
      </motion.div>

      <div className="flex flex-row gap-4">
        {videoData.map((dataItem) => {
          return <VideoBox video={dataItem} key={dataItem.id} />
        })}
      </div>
    </section>
  )
}

export default VideosPage

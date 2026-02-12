import { useRef } from "react"
import sbrpIntroVideo from "../assets/video/sbrp-clinic-showcase.mp4"
import { BOOKING_URLS } from "../constants"
import useVideoAutoplay from "../hooks/useVideoAutoplay"

const Showcase = () => {
  const videoRef = useRef(null)
  useVideoAutoplay(videoRef, { threshold: 0.3 })

  return (
    <section id="home" className="showcase d-flex align-items-center">
      <video
        ref={videoRef}
        src={sbrpIntroVideo}
        playsInline
        autoPlay
        muted
        loop
        aria-label="Clinic showcase video"
      />
      <article className="showcase-text-container">
        <h1 className="fw-bold">Learn the Tools</h1>
        <p>to build a resilient body and live a pain-free life</p>

        <a
          href={BOOKING_URLS.NEW_PATIENT}
          className="btn btn-brand"
          id="btn-showcase"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Schedule an appointment - opens in new tab"
        >
          Schedule an Appointment
        </a>
      </article>
    </section>
  )
}

export default Showcase

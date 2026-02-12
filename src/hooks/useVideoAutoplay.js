import { useEffect } from "react"

const useVideoAutoplay = (videoRef, options = {}) => {
  const {
    playOnVisible = true,
    pauseOnHidden = true,
    threshold = 0.5
  } = options

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && playOnVisible) {
            videoElement.play().catch((error) => {
              console.log("Video autoplay prevented:", error)
            })
          } else if (!entry.isIntersecting && pauseOnHidden) {
            videoElement.pause()
          }
        })
      },
      { threshold }
    )

    observer.observe(videoElement)

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement)
      }
    }
  }, [videoRef, playOnVisible, pauseOnHidden, threshold])
}

export default useVideoAutoplay

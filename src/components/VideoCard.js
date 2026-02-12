import { memo } from "react"

const VideoCard = ({ video }) => {
  return (
    <article className="video">
      <div className="video-container text-center">
        <iframe src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="video-text">
        <h2 className="title">{video.title}</h2>
        <small className="text-brand">{video.subtitle}</small>
        <p>{video.description_1}</p>
        <p>{video.description_2}</p>
      </div>
    </article>
  )
}

export default memo(VideoCard)

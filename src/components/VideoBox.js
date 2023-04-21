import React from "react"

const VideoBox = ({ video }) => {
  return (
    <article className="rounded-xl p-4 w-full">
      <div className="w-full my-16 h-auto">
        <iframe
          src={video.link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
      <h3>{video.title}</h3>
      <p>{video.description}</p>
    </article>
  )
}

export default VideoBox

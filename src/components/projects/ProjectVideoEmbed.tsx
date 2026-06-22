type ProjectVideoEmbedProps = {
  permalink: string
  provider: "youtube"
  title: string
  variant?: "detail" | "cover"
}

export default function ProjectVideoEmbed({
  permalink,
  provider,
  title,
  variant = "detail",
}: ProjectVideoEmbedProps) {
  const embedUrl = provider === "youtube" ? youtubeEmbedUrl(permalink) : permalink
  const isCover = variant === "cover"

  return (
    <div
      className={
        isCover
          ? "project-video-embed project-video-embed-cover"
          : "project-video-embed"
      }
    >
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={
          isCover
            ? "project-video-frame project-video-frame-cover"
            : "project-video-frame"
        }
        loading="lazy"
        src={embedUrl}
        title={title}
      />
    </div>
  )
}

function youtubeEmbedUrl(permalink: string): string {
  const url = new URL(permalink)
  const parts = url.pathname.split("/").filter(Boolean)
  const shortcode =
    url.hostname === "youtu.be" ? parts[0] : parts[0] === "shorts" ? parts[1] : parts[0]

  return `https://www.youtube.com/embed/${shortcode}?autoplay=1&mute=1&playsinline=1&rel=0`
}

import Image from "next/image"

export default function HomePreloader() {
  return (
    <div className="loader-container">
      <div className="spinner">
        <Image
          src="/assets/img/logo/logobash.png"
          alt="Logo"
          width={350}
          height={98}
          className="loader-logo"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: 200,
            maxHeight: 72,
          }}
          priority
        />
      </div>
    </div>
  )
}

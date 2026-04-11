import Image from "next/image"

export default function HomePreloader() {
  return (
    <div className="preloader">
      <div className="loader-container">
        <div className="spinner">
          <Image
            src="/assets/img/logo/logobash.png"
            alt="Logo"
            width={320}
            height={120}
            className="loader-logo"
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  )
}

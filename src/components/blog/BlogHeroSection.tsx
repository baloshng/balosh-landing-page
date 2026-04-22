import Image from "next/image"
import Link from "next/link"

type BlogHeroSectionProps = {
  title: string
  breadcrumbLabel: string
  titleColumnClassName?: string
}

export default function BlogHeroSection({
  title,
  breadcrumbLabel,
  titleColumnClassName = "col-lg-3",
}: BlogHeroSectionProps) {
  return (
    <div className="hero-inner-section-area">
      <Image
        src="/assets/img/elements/elements1.png"
        alt=""
        width={300}
        height={300}
        className="elements1 aniamtion-key-5"
        style={{ width: "auto", height: "auto" }}
      />
      <Image
        src="/assets/img/elements/elements2.png"
        alt=""
        width={300}
        height={300}
        className="elements2 aniamtion-key-1"
        style={{ width: "auto", height: "auto" }}
      />
      <Image
        src="/assets/img/elements/elements3.png"
        alt=""
        width={300}
        height={300}
        className="elements3 aniamtion-key-5"
        style={{ width: "auto", height: "auto" }}
      />
      <Image
        src="/assets/img/elements/elements4.png"
        alt=""
        width={300}
        height={300}
        className="elements4 aniamtion-key-1"
        style={{ width: "auto", height: "auto" }}
      />
      <Image
        src="/assets/img/elements/elements5.png"
        alt=""
        width={300}
        height={300}
        className="elements5 keyframe5"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className={`${titleColumnClassName} m-auto`}>
            <div className="hero-main-area heading1 text-center">
              <h1 className="text-anime-style-3">{title}</h1>
              <Link href="/">
                Home <i className="fa-solid fa-angle-right" />{" "}
                <span>{breadcrumbLabel}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link";

type BlogHeroSectionProps = {
  title: string;
  breadcrumbLabel: string;
  titleColumnClassName?: string;
};

export default function BlogHeroSection({
  title,
  breadcrumbLabel,
  titleColumnClassName = "col-lg-3",
}: BlogHeroSectionProps) {
  return (
    <div className="hero-inner-section-area">
      <img src="/assets/img/elements/elements1.png" alt="" className="elements1 aniamtion-key-5" />
      <img src="/assets/img/elements/elements2.png" alt="" className="elements2 aniamtion-key-1" />
      <img src="/assets/img/elements/elements3.png" alt="" className="elements3 aniamtion-key-5" />
      <img src="/assets/img/elements/elements4.png" alt="" className="elements4 aniamtion-key-1" />
      <img src="/assets/img/elements/elements5.png" alt="" className="elements5 keyframe5" />
      <div className="container">
        <div className="row align-items-center">
          <div className={`${titleColumnClassName} m-auto`}>
            <div className="hero-main-area heading1 text-center">
              <h1 className="text-anime-style-3">{title}</h1>
              <Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>{breadcrumbLabel}</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

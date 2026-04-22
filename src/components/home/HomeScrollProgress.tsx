 "use client"

import { useEffect, useRef, useState } from "react"

export default function HomeScrollProgress() {
  const pathRef = useRef<SVGPathElement | null>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const pathLength = path.getTotalLength()
    path.style.transition = "none"
    path.style.strokeDasharray = `${pathLength} ${pathLength}`
    path.style.strokeDashoffset = `${pathLength}`
    path.getBoundingClientRect()
    path.style.transition = "stroke-dashoffset 10ms linear"

    const update = () => {
      const scroll = window.scrollY || window.pageYOffset
      const height = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const progress = pathLength - (scroll * pathLength) / height
      path.style.strokeDashoffset = `${progress}`
      setIsActive(scroll > 50)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const handleBackToTop = () => {
    const hero = document.getElementById("home")
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/*===== PROGRESS STARTS=======*/}
      <div className="paginacontainer">
        <div
          className={isActive ? "progress-wrap active-progress" : "progress-wrap"}
          onClick={handleBackToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              handleBackToTop()
            }
          }}
          aria-label="Back to top"
        >
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </div>
      {/*===== PROGRESS ENDS=======*/}
    </>
  );
}

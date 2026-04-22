"use client"

import { useEffect, useState } from "react"
import HomePreloader from "@/components/home/HomePreloader"
import HomeScrollProgress from "@/components/home/HomeScrollProgress"

const PRELOADER_READY_MS = 120
const PRELOADER_FALLBACK_MS = 1200
const PRELOADER_EXIT_MS = 350

export default function HomePreloaderProgress() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHiding, setIsHiding] = useState(false)

  useEffect(() => {
    let done = false
    let exitTimer: number | undefined

    const finish = () => {
      if (done) return
      done = true
      setIsHiding(true)
      exitTimer = window.setTimeout(() => {
        setIsVisible(false)
      }, PRELOADER_EXIT_MS)
    }

    if (document.readyState === "complete") {
      const timer = window.setTimeout(finish, PRELOADER_READY_MS)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(finish, PRELOADER_FALLBACK_MS)
    const onLoad = () => {
      window.clearTimeout(timer)
      finish()
    }
    window.addEventListener("load", onLoad, { once: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("load", onLoad)
      if (exitTimer) window.clearTimeout(exitTimer)
    }
  }, [])

  if (!isVisible) {
    return <HomeScrollProgress />
  }

  return (
    <>
      <div className={isHiding ? "preloader is-hidden" : "preloader"}>
        <HomePreloader />
      </div>
      <HomeScrollProgress />
    </>
  )
}

"use client"

import { useEffect } from "react"
import HomePreloader from "@/components/home/HomePreloader"
import HomeScrollProgress from "@/components/home/HomeScrollProgress"

/** Matches layout script fallback: 1800ms × 3 */
const PRELOADER_MAX_MS = 1800 * 3

function hidePreloaderDOM() {
  const preloader = document.querySelector(".preloader")
  if (!preloader?.parentNode) return
  preloader.classList.add("is-hidden")
  window.setTimeout(() => {
    if (preloader.parentNode) {
      preloader.parentNode.removeChild(preloader)
    }
  }, 350)
}

export default function HomePreloaderProgress() {
  useEffect(() => {
    let done = false
    const finish = () => {
      if (done) return
      done = true
      hidePreloaderDOM()
    }

    // Client-side navigation to /: document is already "complete" — only a timer can hide the preloader.
    if (document.readyState === "complete") {
      const timer = window.setTimeout(finish, PRELOADER_MAX_MS)
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(finish, PRELOADER_MAX_MS)
    const onLoad = () => {
      window.clearTimeout(timer)
      finish()
    }
    window.addEventListener("load", onLoad, { once: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("load", onLoad)
    }
  }, [])

  return (
    <>
      <HomePreloader />
      {/* <HomeScrollProgress /> */}
    </>
  )
}

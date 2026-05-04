"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"

/**
 * Each time the user lands on `/`, start at the hero: disable scroll restoration
 * and reset scroll position so back/forward navigation does not restore a mid-page
 * position (avoids carousel, AOS, and anchor glitches).
 */
export default function HomeEntryReset() {
  const pathname = usePathname()
  const initTimerRef = useRef<number | null>(null)

  useLayoutEffect(() => {
    if (pathname !== "/") return
    if (typeof window === "undefined") return
    const prev = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
    return () => {
      window.history.scrollRestoration = prev
    }
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return
    const id = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
    })
    const t = window.setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
    return () => {
      window.cancelAnimationFrame(id)
      window.clearTimeout(t)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname !== "/") return

    let cancelled = false
    let attempts = 0

    const isHomeHeroReady = () => {
      const hero = document.querySelector("#home.carousel-area")
      if (!hero) return true
      return hero.classList.contains("owl-loaded") && Boolean(hero.querySelector(".owl-item.active"))
    }

    const clearInitTimer = () => {
      if (initTimerRef.current === null) return
      window.clearTimeout(initTimerRef.current)
      initTimerRef.current = null
    }

    const runInit = () => {
      if (cancelled) return
      attempts += 1

      if (typeof window.baloshInitHomePage === "function") {
        window.baloshInitHomePage()
        if (isHomeHeroReady()) return
      }

      if (attempts < 20) {
        initTimerRef.current = window.setTimeout(runInit, 100)
      }
    }

    const animationFrame = window.requestAnimationFrame(() => {
      initTimerRef.current = window.setTimeout(runInit, 80)
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(animationFrame)
      clearInitTimer()
    }
  }, [pathname])

  return null
}

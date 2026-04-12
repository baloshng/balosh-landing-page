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
  const prevPathRef = useRef<string | null>(null)

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

  /**
   * Owl / GSAP / AOS init on first full load via `window.load` in main.js.
   * Re-run only when client-navigating to `/` from another route (avoids double SplitText on first paint).
   */
  useEffect(() => {
    const from = prevPathRef.current
    prevPathRef.current = pathname
    if (pathname !== "/") return
    if (from === null || from === "/") return
    const t = window.setTimeout(() => {
      window.baloshInitHomePage?.()
    }, 100)
    return () => window.clearTimeout(t)
  }, [pathname])

  return null
}

"use client"

import { useEffect, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Each time the user lands on `/`, start at the hero: disable scroll restoration
 * and reset scroll position so back/forward navigation does not restore a mid-page
 * position (avoids carousel, AOS, and anchor glitches).
 */
export default function HomeEntryReset() {
  const pathname = usePathname()

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

  return null
}

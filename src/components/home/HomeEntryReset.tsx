"use client"

import { useEffect, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Handles homepage-specific initialization and scroll management.
 * Note: Universal page reload on route change is handled by PageInitializer component.
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

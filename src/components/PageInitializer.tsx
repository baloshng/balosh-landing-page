"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Scalar } from "@/types/global"
export default function PageInitializer() {
  const pathname = usePathname()
  const isFirstRenderRef = useRef(true)

  useEffect(() => {
    const cancelHashScroll = scrollToCurrentHash()

    const handleHashChange = () => {
      scrollToCurrentHash()
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest<HTMLAnchorElement>("a[href*='#']")
      if (!link) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname !== window.location.pathname) return
      if (!url.hash) return

      window.setTimeout(() => scrollToHash(url.hash), 0)
    }

    window.addEventListener("hashchange", handleHashChange)
    document.addEventListener("click", handleClick)
    return () => {
      cancelHashScroll?.()
      window.removeEventListener("hashchange", handleHashChange)
      document.removeEventListener("click", handleClick)
    }
  }, [pathname])

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false
      return
    }
    const delay = pathname.includes("solutions") ? 400 : 200
    const timer = setTimeout(() => {
      void document.body.offsetHeight
      reinitializePageScripts()
    }, delay)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

function scrollToCurrentHash() {
  if (typeof window === "undefined") return
  if (!window.location.hash) return

  const frame = window.requestAnimationFrame(() => {
    scrollToHash(window.location.hash)
  })
  const shortTimer = window.setTimeout(() => {
    scrollToHash(window.location.hash)
  }, 100)
  const longTimer = window.setTimeout(() => {
    scrollToHash(window.location.hash)
  }, 350)

  return () => {
    window.cancelAnimationFrame(frame)
    window.clearTimeout(shortTimer)
    window.clearTimeout(longTimer)
  }
}

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""))
  if (!id) return

  const target = document.getElementById(id)
  if (!target) return

  const header = document.getElementById("header")
  const headerOffset = header ? header.getBoundingClientRect().height + 12 : 0
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  })
}

function reinitializePageScripts() {
  if (typeof window === "undefined") return

  try {
    const w = window as Scalar
    const $ = w.jQuery

    if (!$) return

    reinitializeAOS()

    reinitializeCarousels($)

    if (typeof w.baloshInitHomePage === "function") {
      try {
        w.baloshInitHomePage()
      } catch (e) {
        console.warn("baloshInitHomePage error:", e)
      }
    }

    if (typeof w.baloshInitPage === "function") {
      try {
        w.baloshInitPage()
      } catch (e) {
        console.warn("baloshInitPage error:", e)
      }
    }

    reinitializeGenericPlugins($)

    void document.body.offsetHeight
  } catch (error) {
    console.error("Error reinitializing page scripts:", error)
  }
}

function reinitializeAOS() {
  try {
    const w = window as Scalar
    const AOS = w.AOS

    if (typeof AOS !== "undefined") {
      AOS.init({ disable: "mobile" })
    }
  } catch (error) {
    console.error("Error reinitializing AOS:", error)
  }
}

function reinitializeCarousels($: Scalar) {
  try {
    if (typeof $.fn.owlCarousel === "function") {
      $(".owl-carousel").each(function (this: Scalar) {
        if ($(this).data("owl.carousel")) {
          $(this).owlCarousel("destroy")
        }
      })

      $(".project-slider-area").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        items: 9,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
          0: { items: 1, nav: false },
          600: { items: 2 },
          1000: { items: 3 },
        },
      })

      $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        items: 9,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
          0: { items: 2, nav: false },
          600: { items: 4 },
          1000: { items: 5 },
        },
      })
    }
  } catch (error) {
    console.error("Error reinitializing carousels:", error)
  }
}

function reinitializeGenericPlugins($: Scalar) {
  try {
    if (typeof window !== "undefined" && (window as Scalar).WOW) {
      new (window as Scalar).WOW().init()
    }

    $(document).trigger("page:reinitialized")
  } catch (error) {
    console.error("Error reinitializing generic plugins:", error)
  }
}

export {}

declare global {
  interface Window {
    /** Re-inits homepage carousels + GSAP + AOS after Next.js client navigation back to `/`. */
    baloshInitHomePage?: () => void
  }
}

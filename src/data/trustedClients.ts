/**
 * Client logos for the “Trusted By These Companies” section.
 * Raster files live under `public/assets/img/logo/trusted-clients/`.
 */
export type TrustedClient = {
  name: string
  logoUrl: string
}

function trustedClientLogo(file: string): string {
  return `/assets/img/logo/trusted-clients/${file}`
}

export const trustedClients: TrustedClient[] = [
  { name: "Chicken Republic", logoUrl: trustedClientLogo("chicken-republic_new.jpg") },
  { name: "Christ Embassy", logoUrl: trustedClientLogo("christ-embassy-2.png") },
  { name: "EKEDC", logoUrl: trustedClientLogo("EKEDC_.jpg") },
  { name: "FAAN", logoUrl: trustedClientLogo("FAAN.jpg") },
  { name: "FCMB", logoUrl: trustedClientLogo("FCMB.jpg") },
  { name: "Ikoyi Club", logoUrl: trustedClientLogo("ikoyi-club.jpg") },
  { name: "Lekki Free Zone", logoUrl: trustedClientLogo("LFZ.jpg") },
  { name: "LASUTH", logoUrl: trustedClientLogo("lasuth.jpg") },
  { name: "Lagos Polo Club", logoUrl: trustedClientLogo("polo-club.jpg") },
  { name: "Winners Chapel", logoUrl: trustedClientLogo("WINNERS-CHAPEL-2.png") },
  { name: "Marriott", logoUrl: trustedClientLogo("marriuort.jpg") },
  { name: "Nigerian Breweries", logoUrl: trustedClientLogo("Nigerian-Breweries-1.png") },
  { name: "Oniru Estate", logoUrl: trustedClientLogo("oniru-real-estate-1.png") },
  { name: "Providus Bank", logoUrl: trustedClientLogo("providus-bank.png") },
  { name: "RCCG", logoUrl: trustedClientLogo("RCCG.jpg") },
  { name: "Schlumberger", logoUrl: trustedClientLogo("schlumberger.jpg") },
  { name: "This Present House", logoUrl: trustedClientLogo("this-present-house.jpg") },
  { name: "Victoria Garden City", logoUrl: trustedClientLogo("vgc.jpg") },
  { name: "Wings Complex", logoUrl: trustedClientLogo("wings.jpg") },
]

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "security",
  keywords: [
    "Balosh",
    "access control",
    "security solutions",
    "parking systems",
    "CCTV",
    "automated entrances",
    "Nigeria security company",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Balosh Integrated Services access control and security solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/img/logo/favicon.png", type: "image/png" },
      { url: "/assets/img/logo/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/assets/img/logo/favicon.png",
    apple: [{ url: "/assets/img/logo/favicon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/mobile.css" />
        <link rel="stylesheet" href="/assets/css/plugins/owlcarousel.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/sidebar.css" />
        <link rel="stylesheet" href="/assets/css/plugins/slick-slider.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <style>{`
          .preloader {
            display: flex;
            align-items: center;
            justify-content: center;
            animation: preloader-autohide 0.01s linear 4s forwards;
          }
          .preloader .loading-container {
            margin: 0 !important;
          }
          .preloader #loading-icon {
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          .preloader.is-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: opacity 0.25s ease, visibility 0.25s ease;
          }
          @keyframes preloader-autohide {
            to {
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
            }
          }
        `}</style>
        <noscript>
          <style>{`.preloader { display: none !important; }`}</style>
        </noscript>
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col homepage3-body">
        {children}
        <Script src="/assets/js/plugins/jquery-3-6-0.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/waypoints.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/aos.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/fontawesome.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/magnific-popup.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/mobilemenu.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/owlcarousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/nice-select.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/slick-slider.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/circle-progress.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/counter.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/Splitetext.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

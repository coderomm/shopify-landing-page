import type { Metadata } from "next";
import { appConfig } from "./app-config";

export const appMetadata: Metadata = {
  metadataBase: new URL(appConfig.url),

  title: {
    default: appConfig.seo.defaultTitle,
    template: `%s | ${appConfig.shortName}`,
  },

  description: appConfig.seo.defaultDescription,

  applicationName: appConfig.appName,
  authors: [{ name: appConfig.seo.author }],

  keywords: [...appConfig.seo.keywords],

  alternates: {
    canonical: appConfig.url,
  },

  creator: appConfig.seo.author,
  publisher: appConfig.seo.author,
  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: appConfig.url,
    title: appConfig.seo.defaultTitle,
    description: appConfig.seo.defaultDescription,
    siteName: appConfig.name,
    images: [
      {
        url: appConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Shopify Theme & Storefront Development by Om Sharma",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: appConfig.seo.twitterHandle,
    creator: appConfig.seo.twitterHandle,
    title: appConfig.seo.defaultTitle,
    description: appConfig.seo.defaultDescription,
    images: [appConfig.seo.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-site-verification-code",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};

// Jsonld Structured Data
const baseUrl = new URL(appConfig.url)

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ---------------------------
    // Person (You)
    // ---------------------------
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      "name": "Om Sharma",
      "alternateName": ["CoderOm"],
      "url": baseUrl,
      "image": `${baseUrl}/profile.png`,
      "jobTitle": "Shopify Theme & Storefront Developer",
      "description":
        "Shopify theme developer specializing in custom storefronts, product page UX, variant customization, and performance-focused Shopify experiences.",
      "sameAs": [
        "https://x.com/1omsharma",
        "https://www.linkedin.com/in/1omsharma",
        "https://github.com/coderomm",
        "https://www.upwork.com/freelancers/omsharma",
        "https://www.omsharma.xyz"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhilwara",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      }
    },

    // ---------------------------
    // Organization (Solo Agency)
    // ---------------------------
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Om Sharma",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      },
      "founder": {
        "@id": `${baseUrl}/#person`
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "mail.coderom@gmail.com",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://x.com/1omsharma",
        "https://www.linkedin.com/in/1omsharma"
      ]
    },

    // ---------------------------
    // Website
    // ---------------------------
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Om Sharma — Shopify Developer",
      "publisher": {
        "@id": `${baseUrl}/#organization`
      },
      "inLanguage": "en"
    },

    // ---------------------------
    // Services (MOST IMPORTANT)
    // ---------------------------
    {
      "@type": "Service",
      "@id": `${baseUrl}/#shopify-services`,
      "serviceType": "Shopify Development Services",
      "provider": {
        "@id": `${baseUrl}/#organization`
      },
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "description":
        "Professional Shopify theme development and storefront customization services including product page UX, variant behavior, performance optimization, and custom Shopify themes.",
      "offers": {
        "@type": "Offer",
        "url": `${baseUrl}/contact`,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};
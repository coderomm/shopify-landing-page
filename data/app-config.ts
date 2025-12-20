if (!process.env.NEXT_PUBLIC_APP_URL) {
  throw new Error("NEXT_PUBLIC_APP_URL environment variable is required");
}

export const appConfig = {
  appName: "OmSharma",
  shortName: "CoderOm",

  // Used in headers, SEO titles, invoices later
  name: "Om Sharma — Shopify Theme & Storefront Developer",

  // Primary description used across SEO, OG, metadata
  description:
    "Shopify theme and storefront developer helping brands build fast, conversion-focused Shopify experiences. Specialized in theme customization, product pages, variant UX, and performance-ready storefronts.",

  // Hero section / meta tagline
  tagline:
    "Conversion-focused Shopify themes, storefronts, and customizations — built for real businesses.",

  url: process.env.NEXT_PUBLIC_APP_URL,

  contact: {
    email: "mail.coderom@gmail.com",
    location: "Bhilwara, Rajasthan, India 🇮🇳",
  },

  social: {
    twitter: "https://x.com/1omsharma",
    linkedin: "https://www.linkedin.com/in/1omsharma",
    github: "https://github.com/coderomm",
    upwork: "https://www.upwork.com/freelancers/omsharma",
    mainPortfolio: "https://www.omsharma.xyz",
  },

  github: {
    repository: "https://github.com/coderomm/shopify-landing-page",
    featureRequest:
      "https://github.com/coderomm/shopify-landing-page/issues/new?template=feature_request.yml",
    bugReport:
      "https://github.com/coderomm/shopify-landing-page/issues/new?template=bug_report.yml",
    generalIssue:
      "https://github.com/coderomm/shopify-landing-page/issues/new?template=general.yml",
  },

  seo: {
    defaultTitle:
      "Shopify Theme Developer & Storefront Expert | Om Sharma",
    defaultDescription:
      "Hire a Shopify theme developer to build high-converting storefronts, product pages, and custom theme experiences. Real client work. Clean code. Fast delivery.",

    keywords: [
      "shopify developer",
      "shopify theme developer",
      "shopify theme customization",
      "shopify storefront development",
      "shopify product page customization",
      "shopify variant images",
      "shopify ux",
      "ecommerce storefront developer",
      "freelance shopify developer",
      "shopify expert india",
    ],

    author: "Om Sharma",

    ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/product/hero-light.png`,

    twitterHandle: "@1omsharma",
  },
} as const;

export type AppConfig = typeof appConfig;
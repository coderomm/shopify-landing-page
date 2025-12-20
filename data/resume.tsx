import { Icons } from "@/components/icons";

export type ShopifyProject = {
  id?: string,
  title: string;
  link: string;
  description: string;
  images: string[];
  category: string;
  client: string;
  durationTime: string
  tags: string[];
}

export const PROJECTS_DATA: ShopifyProject[] = [
  {
    title: "DecodeAge",
    link: "https://decodeage.com",
    description:
      "Revamped entire websites and built new ones from scratch based on Figma designs. Developed visually appealing and interactive user interfaces by writing clean and efficient Shopify Liquid templates, HTML, CSS, and JavaScript code.",
    images: ["DecodeAge.png"],
    durationTime: "Jan 2024 - May 2025",
    category: "",
    client: "DecodeAge",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify Plus",
      "Liquid Template Language",
      "Shopify Ecosystem",
      "Shopify Flows",
      "App & Tools Integrations",
    ],
  },
  {
    title: "DecodeAge B2B",
    link: "https://business.decodeage.com",
    description:
      "Revamped entire websites and built new ones from scratch based on Figma designs. Developed visually appealing and interactive user interfaces by writing clean and efficient Shopify Liquid templates, HTML, CSS, and JavaScript code.",
    images: ["DecodeAgeB2B.png"],
    durationTime: "Sep 2024 - May 2025",
    category: "",
    client: "DecodeAge",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify Plus",
      "Liquid Template Language",
      "Shopify Ecosystem",
      "Shopify Flows",
      "App & Tools Integrations",
    ],
  },
  {
    title: "Halemons",
    link: "https://halemons.com/",
    durationTime: "Jan 2024 - April 2025",
    description:
      "Customized existing Shopify themes to align perfectly with clients' branding by tailoring layouts, colors, fonts, and imagery.",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify",
      "Shopify Customization",
      "Liquid Template Language",
      "Shopify Ecosystem",
    ],
    images: ["Halemons.png"],
    category: "",
    client: "DefineDigitally",
  },
  {
    title: "Vivanti London",
    link: "https://vivantilondon.com/",
    durationTime: "April 2025",
    description:
      "Resolved UI/UX issues on the Product Detail Page (PDP) caused by language translation bugs. Improved and optimized the PDP for better performance and user experience.",
    tags: [
      "Shopify",
      "Custom Development",
      "Liquid Template Language",
      "Liquid Schema Updates",
      "Site Optimization",
      "Language Translation Bug Fix",
      "App Fix",
    ],
    images: ["VivantiLondon.png"],
    category: "",
    client: "Alex Levy",
  },
  {
    title: "Kavarsa",
    link: "https://kavarsa.com/",
    durationTime: "2024 - 2025",
    description:
      "Designed and developed a store from scratch, crafting the UI/UX and implementing complete customization to deliver a unique and tailored eCommerce experience.",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify",
      "Shopify Customization",
      "Liquid Template Language",
    ],
    images: ["Kavarsa.png"],
    category: "",
    client: "DefineDigitally",
  },
  {
    title: "Nuvijewels",
    link: "https://nuvijewels.com/",
    durationTime: "2024",
    description:
      "Customising Shopify theme to match the client's branding, including layout, colours, fonts, and imagery.",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify",
      "Shopify Customization",
      "Liquid Template Language",
      "Site Optimization"
    ],
    images: ["Nuvi.png"],
    category: "",
    client: "DefineDigitally",
  },
  {
    title: "SLC",
    link: "https://shopslc.com/",
    durationTime: "2024 - 2025",
    description:
      "Designed and developed a store from scratch, crafting the UI/UX and implementing complete customization to deliver a unique and tailored eCommerce experience.",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify",
      "Shopify Customization",
      "Liquid Template Language",
      "App Integrations",
      "Site Optimization"
    ],
    images: ["SLC.png"],
    category: "",
    client: "DefineDigitally",
  },
  {
    title: "Purly Care",
    link: "https://purlycare.com/",
    durationTime: "2024 - 2025",
    description:
      "Fully customising Shopify theme to match the client's branding, including layout, colours, fonts, and imagery.",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify",
      "Shopify Customization",
      "Liquid Template Language",
      "App Integrations",
      "Site Optimization"
    ],
    images: ["PurlyCare.png"],
    category: "",
    client: "DefineDigitally",
  },
  {
    title: "Dcotstar",
    link: "https://dcotstar.com/",
    durationTime: "2024 - 2025",
    description:
      "Designed and developed a store from scratch, crafting the UI/UX and implementing complete customization to deliver a unique and tailored eCommerce experience.",
    tags: [
      "HTML5",
      "CSS",
      "Javascript",
      "Shopify",
      "Shopify Customization",
      "Liquid Template Language",
    ],
    images: ["Dcotstar.png"],
    category: "Store Development",
    client: "DefineDigitally",
  },
  {
    title: "Night Vision Pro",
    link: "https://www.nightvisionpro.store",
    durationTime: "April 2025 - March 2025",
    description: "Migrated an existing self-hosted advertorial page to Shopify under a same-day deadline, ensuring layout accuracy and Shopify-ready structure.",
    tags: [
      "Shopify",
      "Shopify Theme Development",
      "Liquid",
      "HTML",
      "CSS",
      "JavaScript",
      "Landing Page",
      "Advertorial",
      "Ecommerce",
      "Conversion Focused",
      "Fast Turnaround"
    ],
    images: ["night-vision-pro.png"],
    category: "Advertorial Page",
    client: "Garrett Ruiz",
  },
  {
    title: "Rockport (Minimog Theme)",
    link: "https://www.rockport.in",
    description:
      "Customized the Shopify Minimog theme to show only selected variant images on product pages by fixing variant-image grouping via Liquid. Delivered under an urgent 1–2 hour timeline.",
    images: ["rockport.png"],
    category: "Ecommerce Website Development",
    client: "Aumiqx Technologies",
    durationTime: "May 2025",
    tags: [
      "Shopify",
      "Minimog Theme",
      "Liquid",
      "Theme Customization",
      "Variant Images",
      "Product Page",
    ]
  },
  {
    title: "Lucent Globe",
    link: "https://aas5je-3p.myshopify.com",
    description:
      "Completed and finalized a Shopify website by finishing the homepage and building collection and product pages under an urgent timeline.",
    images: ["lucent-globe.png"],
    category: "Ecommerce Website Development",
    client: "Jagat Singh, Ace Devs",
    durationTime: "May 2025",
    tags: [
      "Shopify",
      "Liquid",
      "Theme Customization",
      "Home Page",
      "Collection Page",
      "Product Page"
    ]
  }
] as const

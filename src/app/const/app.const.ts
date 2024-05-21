
const APP_URL = process.env.APP_URL || "http://localhost:3000"

const SITE_CONFIG = {
  name: "Felic.XYZ",
  icon: "/images/favicon.ico",
  url: APP_URL,
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
const BLOCKCHAIN_NETWORK = process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK || "DEV_NET"

const KEY_TOKEN = process.env.KEY_TOKEN || "refreshToken"
export {
  APP_URL,
  KEY_TOKEN,
  SITE_CONFIG,
  BLOCKCHAIN_NETWORK,
}
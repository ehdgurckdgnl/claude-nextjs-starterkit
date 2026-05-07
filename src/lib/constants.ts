export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Next.js Starterkit",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  description: "Next.js v15 + TailwindCSS v4 + shadcn/ui 스타터킷",
  links: {
    github: "https://github.com/ehdgurckdgnl/claude-nextjs-starterkit",
  },
} as const

export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "컴포넌트", href: "/examples/components" },
  { label: "폼", href: "/examples/forms" },
] satisfies Array<{ label: string; href: string }>

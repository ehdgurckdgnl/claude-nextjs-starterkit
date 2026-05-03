import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:h-14 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Next.js v15
          </a>
          {" + "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

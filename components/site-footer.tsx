import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="grid size-6 place-items-center rounded bg-primary text-xs text-primary-foreground">
            T
          </span>
          Thuso Masango
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · blitz.com — Built with confidence.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ThusoM01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/ThusoM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

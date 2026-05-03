import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  badge?: string
  className?: string
}

export function PageHeader({
  title,
  description,
  badge,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center py-16 space-y-4",
        className
      )}
    >
      {badge && (
        <Badge variant="secondary" className="px-3 py-1">
          {badge}
        </Badge>
      )}
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}

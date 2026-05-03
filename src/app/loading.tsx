import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
      <div className="flex flex-col items-center space-y-4 py-16">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-12 w-80" />
        <Skeleton className="h-6 w-96" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}

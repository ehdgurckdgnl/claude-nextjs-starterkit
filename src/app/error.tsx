"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-2xl font-bold mb-2">문제가 발생했습니다</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        {error.message ?? "예상치 못한 오류가 발생했습니다. 다시 시도해주세요."}
      </p>
      <div className="flex gap-3">
        <Button onClick={reset}>다시 시도</Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          홈으로
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressTimer = window.setTimeout(() => setProgress(100), 40)
    const dismissalTimer = window.setTimeout(() => setIsLoading(false), 180)

    return () => {
      window.clearTimeout(progressTimer)
      window.clearTimeout(dismissalTimer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        !isLoading && "opacity-0 pointer-events-none",
      )}
    >
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent animate-pulse-slow">
          <span className="h-4 w-4 rounded-full bg-accent" />
        </div>

        <h2 className="mb-4 text-2xl font-bold text-foreground">ranveer<span className="text-accent">.vfx</span></h2>
        <p className="text-muted-foreground mb-8">Loading portfolio...</p>

        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-accent transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <div className="text-sm text-muted-foreground mt-4">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}

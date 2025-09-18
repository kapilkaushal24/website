"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
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
        <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6 mx-auto animate-pulse-slow">
          <span className="text-accent-foreground font-bold text-xl">RK</span>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Ranveer Kaushal</h2>
        <p className="text-muted-foreground mb-8">Loading portfolio...</p>

        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-accent transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <div className="text-sm text-muted-foreground mt-4">{Math.round(progress)}%</div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Monitor, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-24 md:pt-28">
      <div className="site-container grid min-h-[calc(100svh-7rem)] items-center gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-0 lg:py-0">
        <div className={cn("relative z-10 py-7 transition-all duration-700 md:py-0", isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          <div className="section-kicker mb-6 flex items-center gap-4 text-xs tracking-[0.22em]">
            IDEAS <span className="text-muted-foreground">×</span> DESIGN <span className="text-muted-foreground">×</span> IMPACT
          </div>
          <h1 className="max-w-[44rem] text-5xl font-extrabold leading-[0.98] text-foreground sm:text-7xl xl:text-[5.5rem]">
            <span className="block">Creativity</span>
            <span className="block text-accent">builds better</span>
            <span className="block">tomorrows<span className="text-accent">.</span></span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-base leading-7 text-muted-foreground sm:text-lg">
            We turn your ideas into powerful visuals, modern brands and digital experiences that leave a mark.
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={() => scrollToSection("portfolio")} className="h-13 rounded-full bg-accent px-8 text-sm font-bold uppercase tracking-wide text-accent-foreground hover:bg-accent/90">
              Explore Our Work <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
          <div className="mt-12 grid max-w-[37rem] grid-cols-3 gap-3 sm:mt-16">
            {[
              { icon: <Lightbulb className="h-5 w-5" />, label: "Brand Design", detail: "Ideas to identity" },
              { icon: <Monitor className="h-5 w-5" />, label: "Video Editing", detail: "Stories in motion" },
              { icon: <Sparkles className="h-5 w-5" />, label: "Creative Assets", detail: "For a digital world" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-2.5 sm:gap-4">
                <span className="mt-0.5 shrink-0 text-accent">{item.icon}</span>
                <span className="min-w-0">
                  <span className="block text-[0.6rem] font-semibold uppercase tracking-wide text-foreground sm:text-xs">{item.label}</span>
                  <span className="mt-1 block text-[0.6rem] leading-4 text-muted-foreground sm:text-xs">{item.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual mx-auto w-full max-w-[52rem] lg:mt-2">
          <img
            className="hero-reference-image"
            src="/components/04-hero-artwork-reference.png"
            alt="Creative collage of a video editor surrounded by visual effects, camera equipment, and ideas"
          />
        </div>
      </div>
    </section>
  )
}

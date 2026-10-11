"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigationLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Works", id: "portfolio" },
  { name: "Blog", id: "blog", hidden: true },
  { name: "Contact", id: "contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      for (const item of navigationLinks) {
        if (item.hidden) continue
        const section = document.getElementById(item.id)
        if (section && section.getBoundingClientRect().top <= 120) {
          setActiveSection(item.id)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={cn("fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-colors duration-300", isScrolled ? "bg-[#141414]/95 backdrop-blur-xl" : "bg-[#1b1b1b] backdrop-blur-md")}>
      <div className="site-container flex h-[108px] items-center justify-between gap-4">
        <button onClick={() => scrollToSection("hero")} className="flex shrink-0 items-center gap-2.5 text-foreground" aria-label="ranveer.vfx home">
          <span className="brand-mark h-10 w-10" aria-hidden="true"><span /></span>
          <span className="text-xl font-bold">ranveer<span className="text-accent">.vfx</span></span>
        </button>

        <div className="hidden items-center gap-8 lg:flex lg:gap-10">
          {navigationLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              hidden={item.hidden || undefined}
              aria-hidden={item.hidden || undefined}
              tabIndex={item.hidden ? -1 : 0}
              className={cn("nav-link py-2 text-xs font-semibold uppercase tracking-[0.12em]", activeSection === item.id && "nav-link-active", item.hidden && "hidden")}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button onClick={() => scrollToSection("contact")} className="hidden h-11 rounded-full border border-accent bg-transparent px-5 text-xs font-semibold uppercase tracking-wider text-foreground shadow-none hover:bg-accent hover:text-accent-foreground sm:inline-flex">
            Let&apos;s Talk <span className="ml-1.5 h-2 w-2 rounded-full bg-accent" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-white/10 hover:text-accent lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-background px-4 pb-5 pt-3 lg:hidden">
          <div className="site-container flex flex-col">
            {navigationLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                hidden={item.hidden || undefined}
                aria-hidden={item.hidden || undefined}
                tabIndex={item.hidden ? -1 : 0}
                className={cn("border-b border-white/5 py-3 text-left text-sm font-medium uppercase tracking-wider text-foreground", item.hidden && "hidden")}
              >
                {item.name}
              </button>
            ))}
            <button onClick={() => scrollToSection("contact")} className="mt-4 flex items-center gap-2 self-start text-sm font-semibold uppercase text-accent">
              Let&apos;s Talk <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

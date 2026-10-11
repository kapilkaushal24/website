"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/ranveer.vfx", label: "Instagram" },
  { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/@toggaming007", label: "YouTube" },
  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/ranveer-kaushal/", label: "LinkedIn" },
  { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/ranveerkaushall", label: "Twitter" },
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "YouTube Editing",
  "Short-form Content",
  "Corporate Videos",
  "Cinematic Storytelling",
  "Color Grading",
  "Motion Graphics",
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-white/10 bg-[#101011]">
      <div className="site-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="brand-mark" aria-hidden="true"><span /></span>
              <span className="text-xl font-bold text-foreground">ranveer<span className="text-accent">.vfx</span></span>
            </div>
            <p className="text-muted-foreground mb-6 text-pretty">
              Professional video editor and aspiring VFX artist crafting compelling visual stories that resonate with
              audiences and drive results.
            </p>
            <h3 className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Follow My Work</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-transparent text-muted-foreground transition-all duration-200 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-1">
              <a
                href="mailto:ranveerwork007@gmail.com"
                className="flex items-center gap-3 border-b border-white/5 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                <span>ranveerwork007@gmail.com</span>
              </a>
              <a
                href="tel:+918091783736"
                className="flex items-center gap-3 border-b border-white/5 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                <span>+91 80917 83736</span>
              </a>
              <div className="flex items-center gap-3 py-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" /> Chandigarh, India
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="mt-4 h-11 rounded-full bg-accent px-5 text-xs font-bold uppercase tracking-wide text-accent-foreground hover:bg-accent/90"
            >
              Start Project
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ranveer Kaushal. All rights reserved. Crafted with passion for visual storytelling.
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-muted-foreground text-sm">Available for new projects</div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

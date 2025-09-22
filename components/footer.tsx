"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Linkedin, Twitter, Mail, Phone, ArrowUp } from "lucide-react"

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
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">RK</span>
              </div>
              <span className="text-xl font-bold text-foreground">Ranveer Kaushal</span>
            </div>
            <p className="text-muted-foreground mb-6 text-pretty">
              Professional video editor and aspiring VFX artist crafting compelling visual stories that resonate with
              audiences and drive results.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 text-muted-foreground cursor-pointer"
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
            <div className="space-y-3">
              <a
                href="mailto:ranveerwork007@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                <span>ranveerwork007@gmail.com</span>
              </a>
              <a
                href="tel:+918091783736"
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                <span>+91 80917 83736</span>
              </a>
              <div className="text-muted-foreground">Chandigarh, India</div>
            </div>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Start Project
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
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
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

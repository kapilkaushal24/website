"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Smartphone, Building2, Film, Zap, Award } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  price: string
}

const services: Service[] = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Short-form Content",
    description: "Engaging reels and short videos optimized for social media platforms with high retention rates.",
    features: ["Instagram Reels", "TikTok Videos", "YouTube Shorts", "Quick Turnaround"],
    price: "From $150",
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "YouTube Editing",
    description: "Complete YouTube video production from raw footage to polished content that drives engagement.",
    features: ["Full Video Editing", "Thumbnail Design", "SEO Optimization", "Analytics Support"],
    price: "From $300",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Corporate Projects",
    description: "Professional corporate videos that communicate your brand message with clarity and impact.",
    features: ["Brand Videos", "Training Content", "Event Coverage", "Testimonials"],
    price: "From $500",
  },
  {
    icon: <Film className="h-8 w-8" />,
    title: "Cinematic Storytelling",
    description: "Narrative-driven content with cinematic quality that captivates and inspires your audience.",
    features: ["Documentary Style", "Color Grading", "Sound Design", "Motion Graphics"],
    price: "From $800",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Quick Edits",
    description: "Fast turnaround editing for time-sensitive content without compromising on quality.",
    features: ["24-48h Delivery", "Basic Color Correction", "Audio Sync", "Format Optimization"],
    price: "From $100",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Premium Package",
    description: "Complete video production service with premium features and dedicated project management.",
    features: ["Full Production", "Multiple Revisions", "Priority Support", "Custom Graphics"],
    price: "From $1200",
  },
]

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="border-y border-white/5 bg-[#101011] py-20 md:py-28">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="section-kicker mb-4">What I do</div>
          <h2 className="section-title mb-5 text-balance text-foreground">Services & Expertise</h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground text-pretty">
            From quick social media edits to cinematic masterpieces, I offer comprehensive video editing services
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "group relative overflow-hidden rounded-md border border-white/10 bg-[#151516] shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-accent/50",
                "animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="rounded-sm border border-accent/30 bg-accent/5 p-3 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-foreground text-balance">{service.title}</h3>
                    <p className="text-accent font-semibold">{service.price}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 group-hover:scale-105"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-14 border-t border-white/10 pt-12 md:mt-20 md:pt-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Ready to Transform Your Vision?
            </h3>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground text-pretty">
              Let's discuss your project and create something extraordinary together. Every story deserves to be told
              beautifully.
            </p>
            </div>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="h-12 shrink-0 rounded-full bg-accent px-7 text-sm font-bold text-accent-foreground hover:bg-accent/90"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

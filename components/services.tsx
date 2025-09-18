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
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Services & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From quick social media edits to cinematic masterpieces, I offer comprehensive video editing services
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 glass dark:glass-dark",
                "animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
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
        <div className="text-center mt-16">
          <div className="glass dark:glass-dark rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Let's discuss your project and create something extraordinary together. Every story deserves to be told
              beautifully.
            </p>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

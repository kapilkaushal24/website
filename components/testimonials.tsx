"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content:
      "Ranveer transformed our corporate training videos into engaging, professional content that our employees actually want to watch. The attention to detail and storytelling approach exceeded our expectations.",
    rating: 5,
    avatar: "/sarah.jpg",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Content Creator",
    company: "YouTube Channel (500K+ subs)",
    content:
      "Working with Ranveer has been a game-changer for my channel. The editing quality is consistently outstanding, and the quick turnaround times have allowed me to maintain a regular upload schedule.",
    rating: 5,
    avatar: "/marcus.jpg",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Wedding Planner",
    company: "Elegant Events Co.",
    content:
      "Ranveer captured the emotion and beauty of our couples' special days perfectly. The cinematic quality and attention to the smallest details made each wedding film a treasured keepsake.",
    rating: 5,
    avatar: "/Emily.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Startup Founder",
    company: "InnovateLab",
    content:
      "Our product launch video needed to tell a compelling story in under 2 minutes. Ranveer delivered exactly what we needed - a video that converted viewers into customers.",
    rating: 5,
    avatar: "/David.jpg",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Fitness Influencer",
    company: "FitLife Brand",
    content:
      "The workout videos Ranveer edited for my brand have incredible energy and flow. The color grading and music sync are perfect, making every routine look professional and motivating.",
    rating: 5,
    avatar: "/lisa.jpg",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Documentary Producer",
    company: "Independent Films",
    content:
      "Ranveer's storytelling ability is exceptional. The documentary we worked on together won three film festival awards. The editing brought our vision to life in ways we never imagined.",
    rating: 5,
    avatar: "/robert.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn("h-4 w-4", i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground")}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="glass dark:glass-dark border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="h-12 w-12 text-accent opacity-50" />
              </div>

              <blockquote className="text-xl md:text-2xl text-center text-foreground mb-8 text-pretty font-medium leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                  />
                  <AvatarFallback>
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                  <div className="flex items-center justify-center mt-2 space-x-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={cn(
                "border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card",
                "animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4 space-x-1">{renderStars(testimonial.rating)}</div>

                <p className="text-muted-foreground mb-4 text-pretty text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="text-xs">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

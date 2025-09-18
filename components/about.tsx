"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  { icon: <Award className="h-6 w-6" />, value: "150+", label: "Projects Completed" },
  { icon: <Users className="h-6 w-6" />, value: "80+", label: "Happy Clients" },
  { icon: <Clock className="h-6 w-6" />, value: "5+", label: "Years Experience" },
  { icon: <Star className="h-6 w-6" />, value: "4.9", label: "Average Rating" },
]

const skills = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Final Cut Pro",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Storytelling",
  "Cinematography",
  "Project Management",
  "VFX",
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">About Ranveer Kaushal</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate storyteller and aspiring VFX artist with a keen eye for cinematic detail and a commitment to
            bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/pic ranveer.png"
                alt="Ranveer Kaushal - Professional Video Editor & VFX Artist"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <Card key={stat.label} className="glass dark:glass-dark border-0 shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2 text-accent">{stat.icon}</div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">
                Crafting Visual Stories That Resonate
              </h3>
              <div className="space-y-4 text-muted-foreground text-pretty">
                <p>
                  Currently pursuing a VFX Diploma at ZICA (1.5 years ongoing), I specialize in transforming raw footage
                  into compelling visual narratives. My journey began with a passion for storytelling and has evolved
                  into a professional craft that combines technical expertise with creative vision in both video editing
                  and visual effects.
                </p>
                <p>
                  I believe that every project, whether it's YouTube content, social media videos, or cinematic pieces,
                  deserves meticulous attention to detail. My approach focuses on understanding your unique story and
                  translating it into visuals that not only look stunning but also connect with your audience on an
                  emotional level.
                </p>
                <p>
                  From color grading that sets the perfect mood to seamless VFX integration that enhances the narrative,
                  I ensure every element serves the greater story. My goal is to exceed your expectations while
                  delivering projects on time and within budget.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Technical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(2).map((stat) => (
                <Card key={stat.label} className="border-0 shadow-sm bg-card">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2 text-accent">{stat.icon}</div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20">
          <Card className="glass dark:glass-dark border-0 shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-balance">My Creative Philosophy</h3>
              <blockquote className="text-lg text-muted-foreground italic max-w-3xl mx-auto text-pretty">
                "Every frame tells a story, every cut has purpose, and every project is an opportunity to create
                something extraordinary. I don't just edit videos—I craft experiences that leave lasting impressions."
              </blockquote>
              <div className="mt-6">
                <div className="text-accent font-semibold">Ranveer Kaushal</div>
                <div className="text-sm text-muted-foreground">Video Editor & Aspiring VFX Artist</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

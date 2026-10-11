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
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="section-kicker mb-4">The editor behind the frame</div>
          <h2 className="section-title mb-5 text-balance text-foreground">About Ranveer Kaushal</h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground text-pretty">
            Passionate storyteller and aspiring VFX artist with a keen eye for cinematic detail and a commitment to
            bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-md border border-white/10 bg-[#151516] p-2 shadow-2xl">
              <img
                src="/Ranveer-AI.png"
                alt="Ranveer Kaushal - Professional Video Editor & VFX Artist"
                className="h-[30rem] w-full rounded-sm object-cover object-top sm:h-[38rem]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-5 right-4 grid grid-cols-2 gap-2 sm:-right-5 sm:bottom-6 sm:gap-3">
              {stats.slice(0, 2).map((stat, index) => (
                  <Card key={stat.label} className="rounded-sm border border-white/10 bg-[#111112]/95 shadow-xl backdrop-blur">
                  <CardContent className="p-3 text-center sm:p-4">
                    <div className="mb-2 flex items-center justify-center text-accent">{stat.icon}</div>
                    <div className="text-xl font-bold text-foreground sm:text-2xl">{stat.value}</div>
                    <div className="text-[0.65rem] text-muted-foreground sm:text-xs">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground text-balance">
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
              <div className="grid grid-cols-2 gap-3">
              {stats.slice(2).map((stat) => (
                  <Card key={stat.label} className="rounded-sm border border-white/10 bg-[#151516] shadow-none">
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
        <div className="mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-16">
          <div className="mx-auto max-w-4xl text-center">
              <h3 className="mb-6 text-2xl font-bold text-foreground text-balance">My Creative Philosophy</h3>
              <blockquote className="mx-auto max-w-3xl text-lg italic leading-8 text-muted-foreground text-pretty">
                "Every frame tells a story, every cut has purpose, and every project is an opportunity to create
                something extraordinary. I don't just edit videos—I craft experiences that leave lasting impressions."
              </blockquote>
              <div className="mt-6">
                <div className="text-accent font-semibold">Ranveer Kaushal</div>
                <div className="text-sm text-muted-foreground">Video Editor & Aspiring VFX Artist</div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

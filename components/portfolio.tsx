"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  videoUrl: string
  tags: string[]
  client?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Brand Story: Tech Startup",
    category: "Corporate",
    description:
      "A compelling brand narrative showcasing innovation and growth for a leading tech startup. This cinematic piece combines dynamic visuals with powerful storytelling.",
    thumbnail: "/tech-startup-office-cinematic.jpg",
    videoUrl: "coming-soon",
    tags: ["Corporate", "Brand Story", "Cinematic"],
    client: "TechFlow Inc.",
  },
  {
    id: "2",
    title: "Epic Gaming Journey: Iceland Quest",
    category: "YouTube",
    description:
      "Embark on an epic gaming journey across Iceland’s breathtaking landscapes, featuring thrilling gameplay highlights from both PC and mobile platforms. Experience cross-platform action, immersive storytelling, and stunning visuals as you conquer challenges and level up in this unique adventure.. Features drone cinematography and immersive storytelling.",
    thumbnail: "",
    videoUrl: "https://youtu.be/8ySZ0c-ON6s?si=1Z5UhuB5Omg_HAOt",
    tags: ["Gaming", "YouTube", "PC", "Mobile"],
    client: "Adventure Seekers",
  },
  {
    id: "3",
    title: "Product Launch: Fashion Collection",
    category: "Commercial",
    description:
      "High-end fashion commercial showcasing the latest collection with sophisticated cinematography and elegant transitions.",
    thumbnail: "/fashion-commercial-luxury.jpg",
    videoUrl: "coming-soon",
    tags: ["Fashion", "Commercial", "Luxury"],
    client: "Elegance Couture",
  },
  {
    id: "4",
    title: "Music Video: Indie Artist",
    category: "Music Video",
    description:
      "Creative music video with artistic visual effects and color grading that perfectly complements the artist's unique sound.",
    thumbnail: "/music-video-artistic-lighting.jpg",
    videoUrl: "coming-soon",
    tags: ["Music Video", "Creative", "Color Grading"],
    client: "Luna Rivers",
  },
  {
    id: "5",
    title: "Social Media: Content Creation",
    category: "Social Media",
    description:
      "Showcasing my personal growth journey on Instagram (@ranveer.vfx) with creative graphics, eye-catching thumbnails, and advanced video editing. Each post highlights my evolving skills and passion for visual storytelling.",
    thumbnail: "/quiz.jpg",
    videoUrl: "https://www.instagram.com/reel/DUqNQeoElqx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    tags: ["Content", "Social Media", "Reels"],
    client: "Own",
  },
  {
    id: "6",
    title: "Documentary: Local Heroes",
    category: "Documentary",
    description:
      "Heartwarming documentary about local community heroes, featuring intimate interviews and compelling narrative structure.",
    thumbnail: "/documentary-interview-community.jpg",
    videoUrl: "coming-soon",
    tags: ["Documentary", "Community", "Storytelling"],
    client: "City Council",
  },
  {
    id: "7",
    title: "AI Speaker Series",
    category: "AI Videos",
    description:
      "Professional speaker presentation with AI-generated images and visual effects. Explores the intersection of artificial intelligence and communication.",
    thumbnail: "/ai_speaker_series.png",
    videoUrl: "https://drive.google.com/file/d/172fBYGNH6jRMETyKzWDs5XfVFKiGXYFS/preview",
    tags: ["AI", "Educational", "Speaker"],
    client: "Own",
  },
  {
    id: "8",
    title: "3D Tracking Demo",
    category: "AI Videos",
    description:
      "Advanced 3D motion tracking demonstration showcasing cutting-edge visual effects and dimensional tracking capabilities for professional applications.",
    thumbnail: "/3d_tracking_demo.png",
    videoUrl: "https://drive.google.com/file/d/1AASFXYqYRE5Bg9egPqRJBhiLss751z9-/preview",
    tags: ["3D", "Visual Effects", "Motion Tracking"],
    client: "Own",
  },
  {
    id: "9",
    title: "Business Shorts",
    category: "Business Shorts",
    description:
      "Engaging short-form content designed for business professionals. Quick, impactful videos perfect for social media and professional presentations.",
    thumbnail: "/business_shorts.png",
    videoUrl: "https://drive.google.com/file/d/1TZPb7q-8Nh6Ay0aUGQPcYfAN7GBmg7RI/preview",
    tags: ["Business", "Short Form", "Professional"],
    client: "Own",
  },
  {
    id: "10",
    title: "Stock Market Analysis",
    category: "Business Shorts",
    description:
      "Dynamic short video analyzing stock market trends and financial insights. Perfect for finance professionals and investment enthusiasts.",
    thumbnail: "/stock_market_analysis.png",
    videoUrl: "https://drive.google.com/file/d/1h28dXzAlAqbypgbGaDhPOx041rbBCN0j/preview",
    tags: ["Finance", "Analysis", "Market"],
    client: "Own",
  },
  {
    id: "11",
    title: "Short Video Story",
    category: "Business Shorts",
    description:
      "A punchy, fast-moving short film concept built to capture attention quickly while delivering emotion, pacing, and a memorable visual payoff.",
    thumbnail: "",
    videoUrl: "https://youtube.com/shorts/hutWUk7ZSAU",
    tags: ["Short Form", "Brand Story", "Social Video"],
    client: "Personal Project",
  },
  {
    id: "12",
    title: "Documentary Story: Human Connection",
    category: "Documentary",
    description:
      "A documentary-style short that captures emotion, real stories, and cinematic portraiture through intimate framing and thoughtful visual rhythm.",
    thumbnail: "",
    videoUrl: "https://youtu.be/-FIKT-yX0hI",
    tags: ["Documentary", "Storytelling", "Human Stories"],
    client: "Personal Project",
  },
]

const categories = ["All", "Corporate", "YouTube", "Commercial", "Music Video", "Social Media", "Documentary", "AI Videos", "Business Shorts"]

const workHistory = [
  {
    role: "Video Editor",
    company: "CityDesk Communication LLP",
    period: "July 2026 – Present",
    location: "Mohali, India",
    description:
      "Leading video editing and content production for client channels, with a focus on storytelling, channel growth, and publish-ready YouTube delivery.",
  },
  {
    role: "Video Editor & Content Creator",
    company: "Freelance / YouTube Creator",
    period: "February 2018 – Present",
    location: "India",
    description:
      "Edited 400+ YouTube videos, managed client channels, and created high-performing gaming and entertainment content that reached millions of viewers, including a 3.4M-view viral edit.",
  },
  {
    role: "Visual Effects Artist",
    company: "Zee Institute of Creative Arts - ZICA",
    period: "May 2025 – September 2026",
    location: "Mohali, India",
    description:
      "Training in professional VFX and motion graphics while building hands-on expertise in Adobe Premiere Pro, After Effects, and Photoshop for editing, content, and visual storytelling.",
  },
  {
    role: "Creative Video Editor",
    company: "Ostello",
    period: "May 2026 – July 2026",
    location: "Gurugram, Haryana, India",
    description:
      "Created branded visual content and short-form edits that aligned with marketing goals and audience engagement strategies.",
  },
]

function getYouTubeVideoId(url: string) {
  if (!url) return ""

  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname.replace(/^www\./, "")

    if (hostname === "youtu.be") {
      return parsedUrl.pathname.split("/").filter(Boolean)[0] || ""
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      const videoId = parsedUrl.searchParams.get("v")
      if (videoId) return videoId

      const pathSegments = parsedUrl.pathname.split("/").filter(Boolean)
      if (pathSegments[0] === "shorts" || pathSegments[0] === "embed") {
        return pathSegments[1] || ""
      }
    }
  } catch {
    // Fall back to regex parsing for non-standard URLs.
  }

  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/)
  return match?.[1] || ""
}

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="bg-background py-20 md:py-28">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <div className="section-kicker mb-4">Selected projects</div>
            <h2 className="section-title text-balance text-foreground">Featured Work</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground text-pretty">
            Explore a curated selection of my latest projects, showcasing diverse storytelling approaches and cinematic
            techniques.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 border-y border-white/10 py-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "h-9 rounded-full px-4 text-xs font-semibold transition-all duration-200",
                selectedCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "border-white/10 bg-transparent text-muted-foreground hover:border-accent/50 hover:bg-white/5 hover:text-foreground",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            let thumbnailSrc = project.thumbnail
            if ((!thumbnailSrc || thumbnailSrc === "") && project.videoUrl) {
              const videoId = getYouTubeVideoId(project.videoUrl)
              if (videoId) {
                thumbnailSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              }
            }
            thumbnailSrc = thumbnailSrc || "/placeholder.svg"
            return (
              <Card
                key={project.id}
                className={cn(
                  "group cursor-pointer overflow-hidden rounded-md border border-white/10 bg-card shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_48px_rgba(0,0,0,0.28)]",
                  "animate-fade-in-up",
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={thumbnailSrc}
                      alt={project.title}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{project.category}</Badge>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="mb-2 text-lg font-semibold text-foreground text-balance">{project.title}</h3>
                    <p className="mb-4 text-sm leading-6 text-muted-foreground text-pretty">
                      {project.description.substring(0, 100)}...
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Work History */}
        <div className="mt-20 border-t border-white/10 pt-12 md:mt-24 md:pt-16">
          <div className="mb-10 max-w-2xl">
            <div className="section-kicker mb-4">Career journey</div>
            <h3 className="section-title text-balance text-foreground">Work History</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {workHistory.map((item) => (
              <Card
                key={`${item.company}-${item.period}`}
                className="rounded-md border border-white/10 bg-[#111112] shadow-none transition-colors duration-300 hover:border-accent/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Badge className="bg-accent text-accent-foreground">{item.period}</Badge>
                    <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{item.location}</span>
                  </div>

                  <h4 className="mb-2 text-xl font-semibold text-foreground">{item.role}</h4>
                  <p className="mb-4 text-base font-medium text-accent">{item.company}</p>
                  <p className="text-sm leading-6 text-muted-foreground text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-md border border-white/10 bg-card shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-destructive/10 text-destructive"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Video Player Section */}
              <div className="relative">
                <div className="aspect-video bg-black flex items-center justify-center video-player-container">
                  {/* Video Player */}
                  {(() => {
                    let videoUrl = selectedProject.videoUrl

                    if (videoUrl === "coming-soon") {
                      return (
                        <div className="flex h-full w-full flex-col items-center justify-center">
                          <p className="text-4xl font-bold text-white">Coming Soon</p>
                        </div>
                      )
                    }

                    if (videoUrl.includes("instagram.com")) {
                      return (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                          <p className="text-2xl font-bold text-white">View on Instagram</p>
                          <a
                            href={videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                          >
                            <ExternalLink className="h-5 w-5" />
                            Open Reel
                          </a>
                        </div>
                      )
                    }

                    if (videoUrl.includes("drive.google.com/file")) {
                      return (
                        <div className="relative h-full w-full">
                          <iframe
                            src={videoUrl}
                            title={selectedProject.title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="h-full w-full"
                            style={{ border: "none" }}
                          />
                          <div className="absolute right-0 top-0 h-20 w-20" style={{ pointerEvents: "auto", background: "rgb(0, 0, 0)", zIndex: 50 }} />
                        </div>
                      )
                    }

                    const youtubeVideoId = getYouTubeVideoId(videoUrl)
                    if (youtubeVideoId) {
                      videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`
                    }

                    if (videoUrl.includes("youtube.com/embed") || videoUrl.includes("vimeo.com")) {
                      return (
                        <iframe
                          src={videoUrl}
                          title={selectedProject.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      )
                    }

                    return (
                      <video
                        src={videoUrl}
                        controls
                        controlsList="nodownload"
                        className="h-full w-full bg-black"
                        style={{ objectFit: "contain" }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )
                  })()}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    {selectedProject.client && (
                      <p className="text-muted-foreground mb-2">Client: {selectedProject.client}</p>
                    )}
                  </div>
                  <Badge className="bg-accent text-accent-foreground">{selectedProject.category}</Badge>
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

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
    videoUrl: "https://example.com/video1",
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
    videoUrl: "https://example.com/video3",
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
    videoUrl: "https://example.com/video4",
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
    videoUrl: "https://www.instagram.com/reel/DMpNqUTz3yj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
    videoUrl: "https://example.com/video6",
    tags: ["Documentary", "Community", "Storytelling"],
    client: "City Council",
  },
]

const categories = ["All", "Corporate", "YouTube", "Commercial", "Music Video", "Social Media", "Documentary"]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore a curated selection of my latest projects, showcasing diverse storytelling approaches and cinematic
            techniques.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full px-6 py-2 transition-all duration-300",
                selectedCategory === category
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "hover:bg-accent/10 hover:text-accent",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            // If YouTube link and no thumbnail, use YouTube thumbnail
            let thumbnailSrc = project.thumbnail;
            if ((!thumbnailSrc || thumbnailSrc === "") && project.videoUrl) {
              let videoId = "";
              if (project.videoUrl.includes("youtube.com/watch?v=")) {
                videoId = project.videoUrl.split("v=")[1]?.split("&")[0];
              } else if (project.videoUrl.includes("youtu.be/")) {
                videoId = project.videoUrl.split("youtu.be/")[1]?.split("?")[0];
              }
              if (videoId) {
                thumbnailSrc = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
              }
            }
            thumbnailSrc = thumbnailSrc || "/placeholder.svg";
            return (
              <Card
                key={project.id}
                className={cn(
                  "group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 bg-card",
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
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="icon" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{project.category}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 text-balance">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">
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

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="aspect-video bg-black rounded-t-lg flex items-center justify-center">
                  {/* Video Player */}
                  {(() => {
                    let videoUrl = selectedProject.videoUrl;
                    // Convert YouTube URLs to embed format
                    if (videoUrl.includes("youtube.com/watch?v=")) {
                      const videoId = videoUrl.split("v=")[1]?.split("&")[0];
                      videoUrl = `https://www.youtube.com/embed/${videoId}`;
                    } else if (videoUrl.includes("youtu.be/")) {
                      const videoId = videoUrl.split("youtu.be/")[1]?.split("?")[0];
                      videoUrl = `https://www.youtube.com/embed/${videoId}`;
                    }
                    if (videoUrl.includes("youtube.com/embed") || videoUrl.includes("vimeo.com")) {
                      return (
                        <iframe
                          src={videoUrl}
                          title={selectedProject.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-t-lg"
                        />
                      );
                    } else {
                      return (
                        <video
                          src={videoUrl}
                          controls
                          className="w-full h-full rounded-t-lg"
                        >
                          Your browser does not support the video tag.
                        </video>
                      );
                    }
                  })()}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                    {selectedProject.client && (
                      <p className="text-muted-foreground">Client: {selectedProject.client}</p>
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
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Full Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

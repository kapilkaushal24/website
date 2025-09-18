"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "ranveerwork007@gmail.com",
    href: "mailto:ranveerwork007@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 80917 83736",
    href: "tel:+918091783736",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Chandigarh, India",
    href: null,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

const socialLinks = [
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://www.instagram.com/ranveer.vfx",
    username: "@ranveer.vfx",
  },
  {
    icon: <Youtube className="h-5 w-5" />,
    label: "YouTube",
    href: "https://www.youtube.com/@toggaming007",
    username: "@toggaming007",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ranveer-kaushal/",
    username: "Ranveer Kaushal",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
    href: "#",
    username: "@ranveer_vfx",
  },
]

const projectTypes = [
  "YouTube Content",
  "Social Media",
  "Corporate Video",
  "Wedding/Events",
  "Documentary",
  "Commercial",
  "Music Video",
  "Other",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProjectTypeSelect = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }))
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.projectType && formData.message.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) {
      setSubmitError("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    console.log("[v0] Form submission started", formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("[v0] API response:", result)

      if (result.success) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
          })
        }, 3000)
      } else {
        setSubmitError(result.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass dark:glass-dark border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.
              </p>
              <div className="text-sm text-muted-foreground">Redirecting back to the form in a few seconds...</div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to bring your vision to life? Get in touch and let's discuss how we can make your project
            extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass dark:glass-dark border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-3">
                    <Label>Project Type *</Label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <Badge
                          key={type}
                          variant={formData.projectType === type ? "default" : "outline"}
                          className={`cursor-pointer transition-all duration-200 ${
                            formData.projectType === type ? "bg-accent text-accent-foreground" : "hover:bg-accent/10"
                          }`}
                          onClick={() => handleProjectTypeSelect(type)}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., $500-1000"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        placeholder="e.g., 2 weeks"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      rows={5}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  {/* Error Message Display */}
                  {submitError && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Form validation helper text */}
                  {!isFormValid && (
                    <p className="text-sm text-muted-foreground text-center">
                      Please fill in all required fields: Name, Email, Project Type, and Message
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      isFormValid && !isSubmitting
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 cursor-pointer"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-foreground mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">{info.icon}</div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-accent transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Follow My Work</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/10 transition-all duration-200 group"
                    >
                      <div className="text-muted-foreground group-hover:text-accent transition-colors duration-200">
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-foreground group-hover:text-accent transition-colors duration-200">
                          {social.label}
                        </div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground text-pretty">
                  I respond to all inquiries within 24 hours. For urgent projects, feel free to call directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

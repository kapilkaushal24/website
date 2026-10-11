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
    href: "https://x.com/ranveerkaushall",
    username: "@ranveerkaushall",
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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isFormValid = 
    formData.name.trim() && 
    formData.email.trim() && 
    validateEmail(formData.email) && 
    formData.projectType && 
    formData.message.trim()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.projectType || !formData.message.trim()) {
      setSubmitError("Please fill in all required fields.")
      return
    }

    if (!validateEmail(formData.email)) {
      setSubmitError("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

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
      setSubmitError("Failed to send message. Please try again or contact directly via email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-background py-20 md:py-28">
          <div className="site-container max-w-4xl">
            <Card className="rounded-md border border-white/10 bg-[#151516] shadow-none">
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
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="site-container">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="section-kicker mb-4">Start a conversation</div>
          <h2 className="section-title mb-5 text-balance text-foreground">
            Let's Create Something Amazing
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground text-pretty">
            Ready to bring your vision to life? Get in touch and let's discuss how we can make your project
            extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-[1.45fr_0.8fr_0.8fr] xl:gap-6">
          {/* Contact Form */}
          <div className="md:col-span-2 xl:col-span-1 xl:row-span-2">
            <Card className="rounded-md border border-white/10 bg-[#151516] shadow-none">
              <CardContent className="p-5 sm:p-8">
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
                          className={`cursor-pointer rounded-full px-4 py-2 transition-all duration-200 ${
                            formData.projectType === type ? "bg-accent text-accent-foreground" : "border-white/15 text-muted-foreground hover:border-accent/50 hover:bg-white/5 hover:text-foreground"
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
                        className="border-white/10 bg-[#101011] focus-visible:ring-accent"
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
                        className="border-white/10 bg-[#101011] focus-visible:ring-accent"
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
                      className="resize-none border-white/10 bg-[#101011] focus-visible:ring-accent"
                    />
                  </div>

                  {/* Error Message Display */}
                  {submitError && (
                    <div className="rounded-sm border border-red-400/25 bg-red-950/30 p-4">
                      <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Form validation helper text */}
                  {!isFormValid && (
                    <p className="text-center text-sm text-muted-foreground">
                      Please fill in all required fields: Name, Email, Project Type, and Message
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className={`h-12 w-full rounded-full text-sm font-bold transition-all duration-300 ${
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
          <div className="contents">
            {/* Contact Information */}
              <Card className="rounded-md border border-white/10 bg-[#151516] shadow-none md:col-span-1 xl:col-start-2 xl:row-start-1">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
                <div className="mb-6 mt-3 h-px w-10 bg-accent" />
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-accent">{info.icon}</div>
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
              <Card className="rounded-md border border-white/10 bg-[#151516] shadow-none md:col-span-1 xl:col-start-3 xl:row-start-1">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold text-foreground">Follow My Work</h3>
                <div className="mb-4 mt-3 h-px w-10 bg-accent" />
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 border-b border-white/5 py-3 transition-colors duration-200 last:border-0 hover:text-accent"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 text-accent transition-colors duration-200 group-hover:border-accent/50 group-hover:bg-accent group-hover:text-accent-foreground">
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
              <Card className="rounded-md border border-accent/25 bg-accent/5 py-0 shadow-none md:col-span-2 xl:col-start-2 xl:col-span-2 xl:row-start-2">
              <CardContent className="p-5 py-4 text-center">
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

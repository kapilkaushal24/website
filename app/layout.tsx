import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Ranveer Kaushal - Video Editor & VFX Artist | Cinematic Storytelling",
  description:
    "Professional video editing and VFX services by Ranveer Kaushal. Specializing in cinematic storytelling, YouTube content, and visual effects. VFX Diploma student at ZICA.",
  generator: "v0.app",
  keywords: [
    "video editing",
    "VFX",
    "visual effects",
    "cinematic",
    "storytelling",
    "YouTube",
    "content creation",
    "professional editor",
  ],
  authors: [{ name: "Ranveer Kaushal" }],
  openGraph: {
    title: "Ranveer Kaushal - Video Editor & VFX Artist | Cinematic Storytelling",
    description:
      "Professional video editing and VFX services by Ranveer Kaushal. Specializing in cinematic storytelling and visual effects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranveer Kaushal - Video Editor & VFX Artist | Cinematic Storytelling",
    description:
      "Professional video editing and VFX services by Ranveer Kaushal. Specializing in cinematic storytelling and visual effects.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

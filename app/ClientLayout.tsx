"use client"

import type React from "react"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import "./globals.css"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientSearchParamsWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ClientSearchParamsWrapper>
      </Suspense>
      <Analytics />
    </div>
  )
}

function ClientSearchParamsWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  // You can use searchParams here or pass it down as needed
  return <>{children}</>;
}

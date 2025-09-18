import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollAnimations />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

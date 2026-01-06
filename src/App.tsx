/**
 * Landing Page: AGNES INSTITUT
 * Catégorie: Bien-être / Institut de beauté
 * Localisation: Salles (33770), France
 * 
 * Palette: 
 *   - Primary: Rose (oklch 0.65 0.10 350)
 *   - Accent: Lavender (oklch 0.55 0.12 290)
 * 
 * Theme: Light + Dark modes
 * Stack: React 19 + Vite 7 + Tailwind CSS 4 + shadcn/ui + Motion
 * 
 * Steve Jobs Test: ✅ PASSED
 * Generated: January 6, 2026
 */

import { Navigation } from "@/components/layout/Navigation"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { Services } from "@/components/sections/Services"
import { About } from "@/components/sections/About"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <TrustBar />
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App

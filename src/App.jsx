import { RootLayout } from "./components/layout/root-layout"
import { HeroSection } from "./components/sections/hero-section"
import { WhyUs } from "./components/sections/why-us"
import { Features } from "./components/sections/features"
import { FAQ } from "./components/sections/faq"
import { Footer } from "./components/sections/footer"

export default function App() {
  return (
    <RootLayout>
      <HeroSection />
      <WhyUs />
      <Features />
      <FAQ />
      <Footer />
    </RootLayout>
  )
}


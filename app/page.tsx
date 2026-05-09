import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Industries from '@/components/Industries'
import BlogTeaser from '@/components/BlogTeaser'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Industries />
      <BlogTeaser />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

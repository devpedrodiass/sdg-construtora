import { Footer } from "@/components/layout/footer"
import { AboutUs } from "./_sections/about-us"
import { Apresentation } from "./_sections/apresentation"
import { Contact } from "./_sections/contact"
import { Faq } from "./_sections/faq"
import { Metrics } from "./_sections/metrics"
import { OurWork } from "./_sections/our-work"
import { Partners } from "./_sections/partners"
import { Services } from "./_sections/services"

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      <Apresentation />
      <AboutUs />
      <Metrics />
      <Services />
      <OurWork />
      <Partners />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

import FeatureGrid from "@/components/FeatureGrid"
import Header from "@/components/Header"
import ParallaxSection from "@/components/ParallaxSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />
        <FeatureGrid />
        <ParallaxSection />
      </div>
    </main>
  )
}


import FeatureCard from "./FeatureCard"

export default function FeatureGrid() {
  const features = [
    {
      title: "Automated Data Collection",
      description:
        "Our system automates carbon data collection using integrations with your existing business systems and reporting software.",
    },
    {
      title: "Monitoring & Reporting",
      description:
        "Effortlessly track and report carbon emissions with user-friendly dashboards and compliance in sustainability reporting.",
    },
    {
      title: "Monitoring & Reporting",
      description:
        "Effortlessly track and report carbon emissions with user-friendly dashboards and compliance in sustainability reporting.",
    },
    {
      title: "Simplified Certification Process",
      description:
        "Streamline your certification process with our simplified, automated capture, reducing complexity and ensuring faster compliance.",
    },
    {
      title: "AI-Driven Insights",
      description:
        "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
    },
    {
      title: "AI-Driven Insights",
      description:
        "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {features.map((feature, index) => (
        <FeatureCard key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  )
}


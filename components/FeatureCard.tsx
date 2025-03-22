interface FeatureCardProps {
    title: string
    description: string
  }
  
  export default function FeatureCard({ title, description }: FeatureCardProps) {
    return (
      <div className="feature-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
          >
            <path d="M12 2L4.5 10 8 10 8 22 16 22 16 10 19.5 10z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-500 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    )
  }
  
  
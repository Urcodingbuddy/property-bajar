"use client"

interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: "premium",
    icon: "🏢",
    title: "Premium Property",
    description: "Instant access to zero brokerage properties",
  },
  {
    id: "credit",
    icon: "💳",
    title: "Pay on credit",
    description: "Pay your rent using Credit Card",
  },
  {
    id: "loans",
    icon: "🏦",
    title: "Home Loans",
    description: "Lowest interest rate offers",
  },
  {
    id: "protect",
    icon: "🔒",
    title: "Property Protect",
    description: "Protection against cyber frauds",
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative py-36 sm:py-20 lg:py-42 px-4 sm:px-6 lg:px-8 -mt-44 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Placeholder */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center text-3xl sm:text-4xl">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

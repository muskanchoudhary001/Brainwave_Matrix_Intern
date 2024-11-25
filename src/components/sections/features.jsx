import { DollarSign, Shield, FileX, Network } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: DollarSign,
      title: "Cheapest TXs",
      description: "Exchange popular digital currencies at the cheapest possible transaction price"
    },
    {
      icon: Shield,
      title: "CerTiK",
      description: "We are Audited by Certik. Certik is the leading security-focused ranking platform to"
    },
    {
      icon: FileX,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets"
    },
    {
      icon: Network,
      title: "CrossDex Support",
      description: "Exchange popular digital currencies at the cheapest possible transaction price"
    }
  ]

  return (
    <section className="py-20 bg-[#0A1020]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-white">Our </span>
          <span className="text-[#E4B40D]">Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0F172A] p-8 rounded-lg hover:bg-[#1E293B] transition-colors duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="w-12 h-12 mb-6 bg-[#1E293B] rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-[#E4B40D]" />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

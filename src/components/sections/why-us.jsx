import React from "react";
import { Check, X, DollarSign, Shield, FileX, Network } from 'lucide-react';

export function WhyUs() {
  const comparisonPoints = [
   "Transaction Fees",
    "Multi-Chain Support",
    "Gas Fee Optimization",
    "User Rewards",
    "Token Compatibility",
    "Advanced Trading Tools"
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Cheapest TXs",
      description: "Low transaction fees"
    },
    {
      icon: Shield,
      title: "CerTiK",
      description: "Security verified"
    },
    {
      icon: FileX,
      title: "No contract sells",
      description: "Secure trading"
    },
    {
      icon: Network,
      title: "CrossDex Support",
      description: "Multi-platform trading"
    }
  ];

  return (
    <section className="py-20 bg-[#0A1020]">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-start mb-16">
          <span className="text-white">Why </span>
          <span className="text-[#F8D948]">MoonEX</span>
          <span className="text-white"> ?</span>
        </h2>

        {/* Comparison Table */}
        <div className="mb-20">
  <div className="max-w-full mx-auto border border-gray-700 rounded-lg overflow-hidden bg-gray-800 transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg shadow-[rgba(0, 0, 0, 0.2)]">
    <div className="grid grid-cols-3 gap-4 bg-[#0A1020]">

      {/* Comparison Header */}
      <div className="flex items-center justify-center col-span-1 p-4 border-b border-r border-gray-700">
        <span className="text-[#F8D948] font-bold text-2xl text-center">Comparison</span>
      </div>

      {/* First Image and Text (Moonex) */}
      <div className="flex items-center justify-center p-4 border-b border-r border-gray-700">
        <img src="/demo.png" alt="Moonex" className="w-12 h-12 object-contain transform scale-110" />
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E4B40D] via-[#FFD700] to-[#E4B40D]">
          Moonex
        </span>
      </div>

      {/* Second Image (Uniswap) */}
      <div className="flex items-center justify-center p-4 border-b border-gray-700">
        <img src="/uni1.png" alt="Uniswap" className="w-16 h-16 object-contain transform scale-110" />
        <img src="/uni2.png" alt="Uniswap" className="w-24 h-24 object-contain transform scale-110" />
      </div>

      {/* Comparison Points */}
      {comparisonPoints.map((point, index) => (
        <React.Fragment key={index}>
          <div className="text-white/60 py-4 px-4 text-left border-b border-r border-gray-700 font-bold">
            {point}
          </div>

          <div className="flex justify-center py-4 border-b border-r border-gray-700">
            <Check className="text-green-500 w-6 h-6" />
          </div>

          <div className="flex justify-center py-4 border-b border-gray-700">
            <X className="text-red-500 w-6 h-6" />
          </div>
        </React.Fragment>
      ))}

    </div>
  </div>
</div>

      </div>
    </section>
  );
}

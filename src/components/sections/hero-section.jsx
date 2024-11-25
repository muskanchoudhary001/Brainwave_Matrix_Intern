import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
 
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="ring-1 absolute w-[300px] h-[300px] border-2 border-[#E4B40D] rounded-full opacity-20 transform rotate-45 animate-light-dim" />
          <div className="ring-2 absolute w-[500px] h-[500px] border-2 border-[#FFD700] rounded-full opacity-15 transform rotate-45 animate-light-dim-delayed" />
          <div className="ring-3 absolute w-[700px] h-[700px] border-2 border-[#D4A100] rounded-full opacity-10 transform rotate-45 animate-light-dim-slower" />
          <div className="ring-4 absolute w-[900px] h-[900px] border-2 border-[#C9A20F] rounded-full opacity-5 transform rotate-45 animate-light-dim-slowest" />
        </div>
        <div className="absolute top-10 right-10 w-4 h-4 text-white opacity-50">
          ✧
        </div>
        <div className="absolute bottom-20 left-20 w-4 h-4 text-white opacity-50">
          ✧
        </div>
        <div className="absolute top-40 right-40 w-8 h-8 text-white opacity-50">
          ✧
        </div>
        <div className="absolute top-60 right-60 w-10 h-10 text-white opacity-50">
          ✧
        </div>
        <div className="absolute bottom-20 left-20 w-4 h-4 text-white opacity-50">
          ✧
        </div>
        <div className="absolute top-60 right-600 w-10 h-10 text-white opacity-50">
          ✧
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 flex flex-col items-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white space-y-3">
              <span className="block">Trusted Multi-Chain</span>
              <span className="block text-[#E4B40D]">DEX Platform</span>
            </h1>
            <p className="text-lg text-white/60">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:opacity-90 px-4 py-2 shadow-md transition-transform transform hover:scale-105"
              >
                Connect Wallet
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#E4B40D] text-[#E4B40D] hover:bg-[#E4B40D]/10 rounded-3xl"
              >
                Trade Crypto
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-r from-[#D4A100] via-[#DDBE4E] to-[#D4A100] shadow-xl shadow-[#D4A100]/20 hover:shadow-2xl hover:shadow-[#DDBE4E] w-[200px] md:w-[400px] mx-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

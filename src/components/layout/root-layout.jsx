import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

export function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A1020]">
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-[75px] h-[73px] opacity-100" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E4B40D] via-[#FFD700] to-[#FF6347]">
                Moonex
              </span>
            </div>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-14">
                {["Home", "About Us", "Roadmap", "FAQs", "Contact Us"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      className="text-sm font-bold text-white hover:text-[#E4B40D] transition-colors"
                      href="#"
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              className="bg-gradient-to-r from-[#E4B40D] via-[#FFD700] to-[#FF6347] text-black hover:bg-[#E4B40D]/90 rounded-3xl"
            >
              Connect Wallet
            </Button>

          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}


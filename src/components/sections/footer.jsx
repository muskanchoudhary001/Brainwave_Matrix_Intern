import React from 'react';
import { FaTelegramPlane, FaTwitter, FaReddit } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-[#0e1529] py-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2"> 
                <img 
                  src="/footerlogo.png" 
                  alt="Footer Logo" 
                  className="w-36 h-36"  
                />
            </a>
          </div>

          <nav className="flex items-center gap-8">
            <a href="/about" className="font-bold text-white hover:text-[#F8D948] transition-colors">
              About Us
            </a>
            <a href="/roadmap" className="font-bold text-white hover:text-[#F8D948] transition-colors">
              Roadmap
            </a>
            <a href="/faqs" className="font-bold text-white hover:text-[#F8D948] transition-colors">
              FAQs
            </a>
            <a href="/contact" className="font-bold text-white hover:text-[#F8D948] transition-colors">
              Contact Us
            </a>
          </nav>

          <div className="flex flex-col items-center gap-2">  
            <div className="flex items-center gap-1">
              <span className="font-bold text-white">Contact </span>
              <span className="font-bold text-[#F8D948]">Us</span>
            </div>
            <div className="flex items-center gap-4 border border-gray-800 rounded-lg px-4 py-2">
              <a href="https://telegram.org" className="text-white hover:text-[#F8D948] transition-colors" aria-label="Telegram">
                <FaTelegramPlane className="w-6 h-6" />
              </a>
              <a href="https://reddit.com" className="text-white hover:text-[#F8D948] transition-colors" aria-label="Reddit">
                <FaReddit className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-[#F8D948] transition-colors" aria-label="Twitter">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


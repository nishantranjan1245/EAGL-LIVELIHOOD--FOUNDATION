

import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: "Home", page: "Home" },
    { name: "About Us", page: "About" },
    { name: "Programs", page: "Programs" },
    { name: "Impact", page: "Impact" },
    { name: "Get Involved", page: "GetInvolved" },
    { name: "Contact", page: "Contact" },
  ];

  const isActive = (pageName) => currentPageName === pageName;

  React.useEffect(() => {
    const pageTitles = {
      "Home": "EAGL Livelihood Foundation | A Non-Profit for Nature, Climate & Communities",
      "About": "About Us | EAGL Livelihood Foundation",
      "Programs": "Programs | EAGL Livelihood Foundation",
      "Impact": "Impact | EAGL Livelihood Foundation",
      "GetInvolved": "Get Involved | EAGL Livelihood Foundation",
      "Contact": "Contact | EAGL Livelihood Foundation",
      "Donate": "Donate Now | EAGL Livelihood Foundation",
      "FAQs": "FAQs | EAGL Livelihood Foundation",
      "TermsPrivacy": "Terms & Privacy | EAGL Livelihood Foundation",
      "Volunteer": "Volunteer | EAGL Livelihood Foundation"
    };
    
    document.title = pageTitles[currentPageName] || "EAGL Livelihood Foundation";
    
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'icon';
    favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f1e479452527a7a4e86570/e0713679b_1aaacef8e_Screenshot_22-removebg-preview.png';
    document.head.appendChild(favicon);
  }, [currentPageName]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header - Clean & Simple Design */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-50 to-teal-50 border-b-4 border-teal-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <img 
                src="public/images/logo.png" 
                alt="EAGL Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-teal-700">EAGL LIVELIHOOD</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                    isActive(item.page)
                      ? "bg-teal-600 text-white shadow-md"
                      : "text-gray-900 hover:bg-white hover:text-teal-600 hover:shadow-sm"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Donate Button */}
            <div className="hidden lg:block">
              <Button 
                asChild
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-5 rounded-full shadow-lg transition-all duration-200"
              >
                <Link to={createPageUrl("Donate")} className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Donate Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-white rounded-full">
                  <Menu className="w-6 h-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-b from-emerald-50 to-teal-50">
                <div className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={createPageUrl(item.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-6 py-3 rounded-full font-semibold text-base transition-all ${
                        isActive(item.page) 
                          ? "bg-teal-600 text-white shadow-md" 
                          : "text-gray-700 hover:bg-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button 
                    asChild
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold mt-4 py-6 rounded-full shadow-lg"
                  >
                    <Link to={createPageUrl("Donate")} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-teal-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Logo & Tagline */}
            <div className="md:col-span-1">
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f1e479452527a7a4e86570/e0713679b_1aaacef8e_Screenshot_22-removebg-preview.png" 
                  alt="EAGL Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg font-bold">EAGL LIVELIHOOD</span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering Communities • Restoring Nature • Driving Climate Action
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-gray-200 uppercase tracking-wider">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li><Link to={createPageUrl("Home")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">Home</Link></li>
                <li><Link to={createPageUrl("About")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">About Us</Link></li>
                <li><Link to={createPageUrl("Programs")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">Programs</Link></li>
                <li><Link to={createPageUrl("GetInvolved")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">Get Involved</Link></li>
                <li><Link to={createPageUrl("Donate")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">Donate</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-gray-200 uppercase tracking-wider">EXPLORE</h4>
              <ul className="space-y-2">
                <li><Link to={createPageUrl("Impact")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">Impact Report</Link></li>
                <li><Link to={createPageUrl("FAQs")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">FAQs</Link></li>
                <li><Link to={createPageUrl("TermsPrivacy")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">Terms & Privacy</Link></li>
                <li><Link to={createPageUrl("Volunteer")} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">Volunteer</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-gray-200 uppercase tracking-wider">CONNECT</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>info@eagllivelihood.org</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>Maharashtra, India</span>
                </li>
                <li className="flex items-start gap-2 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>+91 9876543210</span>
                </li>
              </ul>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-teal-600 rounded flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-teal-600 rounded flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-teal-600 rounded flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-teal-600 rounded flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2017-2025 EAGL Livelihood Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


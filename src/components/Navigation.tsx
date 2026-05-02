/*
 * THE INKWELL — Navigation Sidebar
 * Design: The Iron Gate
 * Features: Mobile-responsive, Victorian styling, active state tracking
 */

import { Link, useLocation } from "wouter";
import { cn } from "../../lib/utils";
import { 
  Home, 
  Book, 
  Info, 
  Mail, 
  Menu, 
  X,
  Ghost
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "The Masthead", href: "/", icon: Home },
  { name: "The Archive", href: "/archive", icon: Book },
  { name: "The Curator", href: "/about", icon: Info },
  { name: "The Dispatch", href: "/subscribe", icon: Mail },
];

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663614260208/VLQTr2HHpa65hSd5QHn4op/inkwell_logo-L9Z3Xp7M9V5b2RD.webp";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-black/80 border border-gold/20 text-gold/80"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <nav className={cn(
        "fixed inset-y-0 left-0 z-40 w-56 transform transition-transform duration-500 ease-in-out lg:translate-x-0 border-r border-gold/10",
        "bg-black/95 backdrop-blur-md",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full py-12 px-6">
          
          {/* Logo / Brand */}
          <div className="mb-16 text-center">
             <Link href="/">
                <div className="cursor-pointer group">
                  <div className="relative w-16 h-16 mx-auto mb-4 border border-gold/20 p-2 transition-colors group-hover:border-gold/50">
                    <Ghost size={32} className="w-full h-full text-gold/40 transition-colors group-hover:text-gold/70" />
                  </div>
                  <h1 className="font-cinzel text-[0.6rem] tracking-[0.4em] text-gold/60 uppercase">
                    Miasma Inoculus
                  </h1>
                </div>
             </Link>
          </div>

          {/* Nav Links */}
          <div className="flex-1 space-y-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location === item.href;

              return (
                <Link key={item.href} href={item.href}>
                  <div 
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-4 cursor-pointer group transition-all",
                      active ? "text-gold" : "text-gold/40 hover:text-gold/70"
                    )}
                  >
                    <Icon size={16} className={cn(
                      "transition-transform group-hover:scale-110",
                      active ? "opacity-100" : "opacity-40"
                    )} />
                    <span className="font-cinzel text-[0.65rem] tracking-widest uppercase">
                      {item.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer Decoration */}
          <div className="mt-auto pt-8 border-t border-gold/5 text-center">
             <p className="font-serif italic text-[0.55rem] text-gold/20 tracking-tighter">
               Curated by The Inkwell
             </p>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/60 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

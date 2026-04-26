import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Facebook, Instagram, Youtube, ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Events", path: "/events" },
    { name: "Giving", path: "/giving" },
    { name: "Connect", path: "/connect" }
  ];

  // Helper to determine if link is active
  const isActive = (path: string) => {
    if (path === "#") return false;
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-hog-black font-sans text-hog-text-light selection:bg-hog-green-100 overflow-x-hidden flex flex-col items-center">
      {/* Navigation */}
      <header className="w-full absolute top-0 left-0 z-50 bg-hog-black/80 backdrop-blur-md border-b border-hog-black-border pt-2 pb-2 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer shrink-0 z-50"
            >
              <img src="/logo.png" alt="RCCG House of Grace Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-sm" />
              <span className="font-extrabold text-sm sm:text-lg md:text-xl tracking-tight text-hog-text-light">RCCG, HOUSE OF GRACE</span>
            </motion.div>
          </Link>

          {/* Desktop Nav - Pill Style */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-6 bg-hog-black-card/80 border border-hog-black-border px-8 py-2.5 rounded-full backdrop-blur-md absolute left-1/2 -translate-x-1/2"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium transition-colors ${isActive(item.path) ? 'text-hog-green-400 font-bold' : 'text-hog-text-dim hover:text-hog-green-400'}`}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          {/* Desktop Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-4"
          >
            <Link to="/connect" className="hog-btn-primary py-2 px-6">
              Join Us
            </Link>
            <Link to="/kingdom-cinema" className="hog-btn-outline-dark py-2 px-6">
              Kingdom Cinema
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-hog-text-light hover:bg-hog-black-card rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
               initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-0 bg-hog-black flex flex-col md:hidden z-[100] overflow-y-auto"
            >
              {/* Header inside mobile menu */}
              <div className="flex justify-between items-center p-6">
                {/* Half circle logo matching mockup */}
                <div className="w-6 h-12 bg-hog-black-card rounded-r-full" /> 
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-hog-text-light hover:bg-hog-black-card rounded-full transition-colors"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col px-8 py-6 gap-8 flex-grow">
                {navLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-between items-center text-hog-text-light font-medium transition-colors group"
                  >
                    <span className="text-xl">{item.name}</span>
                    <ChevronRight className="w-5 h-5 text-hog-text-ghost group-hover:text-hog-green-400 transition-colors" />
                  </Link>
                ))}
                <Link 
                  to="/kingdom-cinema" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-between items-center text-hog-text-light font-medium transition-colors group"
                >
                  <span className="text-xl">Kingdom Cinema</span>
                  <ChevronRight className="w-5 h-5 text-hog-text-ghost group-hover:text-hog-green-400 transition-colors" />
                </Link>

                <div className="pt-6">
                  <Link
                    to="/connect"
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="hog-btn-primary w-full py-4 text-lg"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>

              {/* Social Links at the bottom */}
              <div className="flex justify-center gap-8 pb-10 pt-4 text-warm-400">
                <a href="https://www.facebook.com/rccghoga14" target="_blank" rel="noreferrer" className="hover:text-sunrise-600 transition-colors text-sm font-medium">Facebook</a>
                <a href="https://www.instagram.com/rccghoga14/" target="_blank" rel="noreferrer" className="hover:text-sunrise-600 transition-colors text-sm font-medium">Instagram</a>
                <a href="https://www.tiktok.com/@rccghouseofgracelp15" target="_blank" rel="noreferrer" className="hover:text-sunrise-600 transition-colors text-sm font-medium">TikTok</a>
                <a href="https://www.youtube.com/@rccghouseofgrace5858" target="_blank" rel="noreferrer" className="hover:text-sunrise-600 transition-colors text-sm font-medium">YouTube</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Rendered Here */}
      <div className="w-full flex flex-col items-center flex-grow">
        <Outlet />
      </div>

      {/* Footer Navigation */}
      <footer className="w-full bg-hog-black pt-16 pb-12 md:pb-20 px-6 md:px-12 lg:px-8 border-t border-hog-black-border mt-auto relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8 items-start">
          {/* Col 1: Logo */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="RCCG House of Grace Logo" className="h-20 md:h-24 w-auto object-contain drop-shadow-md" />
              <span className="font-extrabold text-xl md:text-2xl tracking-tight whitespace-nowrap leading-tight text-hog-text-light">RCCG, HOUSE OF GRACE</span>
            </div>
          </div>

          {/* Center Column: Menu Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold tracking-tight text-hog-green-400">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-hog-text-dim hover:text-hog-green-400 transition-colors w-fit underline-offset-4 hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Contact & Social */}
          <div className="flex flex-col gap-12">
            {/* Contact Us */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold tracking-tight text-hog-green-400">Contact Us</h4>
              <div className="space-y-4">
                <a href="mailto:rccghouseofgracemedia@gmail.com" className="text-hog-text-dim hover:text-hog-green-400 transition-colors block underline-offset-4 hover:underline">
                  rccghouseofgracemedia@gmail.com
                </a>
                <p className="text-hog-text-dim block whitespace-nowrap leading-relaxed">
                  52, Ajibola Crescent, Alapere, Ketu, Lagos
                </p>
              </div>
            </div>

            {/* Our Social */}
             <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold tracking-tight text-hog-green-400">Our Social</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/rccghoga14" target="_blank" rel="noreferrer" className="p-2 -ml-2 text-hog-text-ghost hover:text-hog-green-400 hover:bg-hog-black-card rounded-full transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@rccghouseofgracelp15" target="_blank" rel="noreferrer" className="p-2 text-hog-text-ghost hover:text-hog-green-400 hover:bg-hog-black-card rounded-full transition-all">
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@rccghouseofgrace5858" target="_blank" rel="noreferrer" className="p-2 text-hog-text-ghost hover:text-hog-green-400 hover:bg-hog-black-card rounded-full transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/rccghoga14/" target="_blank" rel="noreferrer" className="p-2 text-hog-text-ghost hover:text-hog-green-400 hover:bg-hog-black-card rounded-full transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

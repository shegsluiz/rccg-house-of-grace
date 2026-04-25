import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Facebook, Instagram, Linkedin, Twitter, Youtube, ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

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
    <div className="min-h-screen bg-black font-sans text-white selection:bg-green-400/30 overflow-x-hidden flex flex-col items-center">
      {/* Navigation */}
      <header className="w-full absolute top-0 left-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent pt-2 pb-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-5">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer shrink-0 z-50"
            >
              <img src="/logo.png" alt="RCCG House of Grace Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-md" />
              <span className="font-extrabold text-sm sm:text-lg md:text-xl tracking-tight">RCCG, HOUSE OF GRACE</span>
            </motion.div>
          </Link>

          {/* Desktop Nav - Pill Style */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-2.5 rounded-full backdrop-blur-md absolute left-1/2 -translate-x-1/2"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-sm font-medium transition-colors ${isActive(item.path) ? 'text-white' : 'text-gray-300 hover:text-white'}`}
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
            <button className="px-5 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-all">
              Join Us
            </button>
            <Link to="/kingdom-cinema" className="px-5 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-all inline-block">
              Kingdom Cinema
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
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
              className="fixed inset-0 bg-white flex flex-col md:hidden z-[100] overflow-y-auto"
            >
              {/* Header inside mobile menu */}
              <div className="flex justify-between items-center p-6">
                {/* Half circle logo matching mockup */}
                <div className="w-6 h-12 bg-zinc-900 rounded-r-full" /> 
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
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
                    className="flex justify-between items-center text-zinc-900 font-medium transition-colors group"
                  >
                    <span className="text-xl">{item.name}</span>
                    <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                  </Link>
                ))}
                <Link 
                  to="/kingdom-cinema" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-between items-center text-zinc-900 font-medium transition-colors group"
                >
                  <span className="text-xl">Kingdom Cinema</span>
                  <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                </Link>

                <div className="pt-6">
                  <Link
                    to="/connect"
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium text-lg hover:bg-zinc-800 transition-colors flex items-center justify-center"
                  >
                    Plan Your Visit
                  </Link>
                </div>
              </div>

              {/* Social Links at the bottom */}
              <div className="flex justify-center gap-8 pb-10 pt-4 text-zinc-400">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors text-sm font-medium">Facebook</a>
                <a href="https://www.instagram.com/rccghoga14/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors text-sm font-medium">Instagram</a>
                <a href="https://www.youtube.com/@rccghouseofgrace5858" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors text-sm font-medium">YouTube</a>
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
      <footer className="w-full pt-16 pb-12 md:pb-20 px-6 md:px-12 lg:px-8 max-w-7xl mx-auto border-t border-white/5 mt-auto relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 items-start">
          {/* Col 1: Logo */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="RCCG House of Grace Logo" className="h-20 md:h-24 w-auto object-contain drop-shadow-md" />
              <span className="font-extrabold text-xl md:text-2xl tracking-tight max-w-[200px] leading-tight">RCCG, HOUSE OF GRACE</span>
            </div>
          </div>

          {/* Center Column: Menu Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-semibold tracking-tight">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="text-zinc-400 hover:text-white transition-colors w-fit underline-offset-4 hover:underline"
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
              <h4 className="text-xl font-semibold tracking-tight">Contact Us</h4>
              <div className="space-y-4">
                <a href="mailto:rccghouseofgracemedia@gmail.com" className="text-zinc-400 hover:text-white transition-colors block underline-offset-4 hover:underline">
                  rccghouseofgracemedia@gmail.com
                </a>
                <p className="text-zinc-400 block max-w-[200px] leading-relaxed">
                  52, Ajibola Crescent, Alapere, Ketu, Lagos
                </p>
              </div>
            </div>

            {/* Our Social */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-semibold tracking-tight">Our Social</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="p-2 -ml-2 text-zinc-400 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@rccghouseofgrace5858" target="_blank" rel="noreferrer" className="p-2 text-zinc-400 hover:text-white transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/rccghoga14/" target="_blank" rel="noreferrer" className="p-2 text-zinc-400 hover:text-white transition-all">
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

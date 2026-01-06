import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/lib/constants';
import { useTheme } from '@/hooks/useTheme';

const LINKS = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Soins', href: '#services' },
  { name: 'À propos', href: '#about' },
  { name: 'Avis', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="relative z-50 text-2xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity"
              onClick={closeMenu}
            >
              <span className="text-primary">{BUSINESS.name.split(' ')[0]}</span>
              <span className="text-foreground"> {BUSINESS.name.split(' ')[1]}</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <Button asChild className="rounded-full px-6 font-medium shadow-lg shadow-primary/20">
                <a 
                  href={BUSINESS.links.planity} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Réserver
                </a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent text-muted-foreground"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 z-50 text-foreground hover:bg-accent rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl md:hidden h-[calc(100vh-5rem)]"
            >
              <div className="container mx-auto px-4 py-8 flex flex-col gap-6 h-full overflow-y-auto">
                <nav className="flex flex-col gap-2">
                  {LINKS.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-2xl font-serif font-medium text-foreground py-4 border-b border-border/40 hover:text-primary hover:border-primary/50 transition-all flex items-center justify-between group"
                    >
                      {link.name}
                      <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary">
                        →
                      </span>
                    </motion.a>
                  ))}
                </nav>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pb-8"
                >
                  <Button asChild size="lg" className="w-full rounded-full text-lg h-12 shadow-xl shadow-primary/20">
                    <a 
                      href={BUSINESS.links.planity} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Prendre Rendez-vous
                    </a>
                  </Button>
                  
                  <div className="mt-8 text-center text-muted-foreground text-sm">
                    <p>{BUSINESS.address.street}</p>
                    <p>{BUSINESS.address.postalCode} {BUSINESS.address.city}</p>
                    <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="block mt-2 text-primary">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

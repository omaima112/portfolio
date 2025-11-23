import { useState } from 'react';
import { Linkedin, Download, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';

interface HeaderProps {
  pages: string[];
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ pages, currentPage, onNavigate }: HeaderProps) {
  const [isResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glassmorphism shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button
            onClick={() => onNavigate('Homepage')}
            className="flex items-center space-x-2"
            aria-label="Go to home"
          >
            <span className="font-heading text-[#5A2653] transition-all duration-300 hover:opacity-80">
              Fatima's Portfolio
            </span>
          </button>

          {/* (removed center hamburger - menu will be on the right next to actions) */}

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 relative">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-300 hover:bg-[#F6E1F0] text-[#5A2653]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <Button
              className="hidden sm:flex items-center gap-2 bg-[#5A2653] hover:bg-[#7E3F74] text-white transition-all duration-300"
              onClick={() => {
                // Placeholder for resume download
                /* eslint-disable no-alert */
                alert('Resume download would trigger here');
              }}
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>

            {/* Radix DropdownMenu anchored to the right-side actions */}
            <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenu.Trigger asChild>
                <button
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  className="p-2 rounded-lg transition-all duration-200 hover:bg-[#F6E1F0] text-[#5A2653]"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content side="bottom" align="end" sideOffset={8} asChild>
                  <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                      // force a compact box and prevent full-width stretching
                      className="inline-block z-[9999] bg-white rounded-lg shadow-lg border border-[#EED1E6] max-h-[60vh] overflow-auto origin-top-right"
                      style={{ willChange: 'transform, opacity', width: '20rem', maxWidth: '90vw' }}
                    >
                    {pages.map((p) => (
                      <DropdownMenu.Item asChild key={p}>
                        <button
                          role="menuitem"
                          onClick={() => {
                            onNavigate(p);
                            setIsMenuOpen(false);
                          }}
                          className={`text-left px-3 py-2 rounded-md w-full hover:bg-[#F6E1F0] text-[#5A2653] font-heading transition-colors outline-none focus:bg-[#F6E1F0] focus:ring-2 focus:ring-[#A86A9A]/30 ${
                            currentPage === p ? 'font-semibold bg-[#F6E1F0]' : ''
                          }`}
                        >
                          {p}
                        </button>
                      </DropdownMenu.Item>
                    ))}
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </header>
  );
}

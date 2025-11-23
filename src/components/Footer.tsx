import { Heart, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#5A2653] to-[#7E3F74] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="font-heading mb-2">Fatima</h3>
            <p className="font-body opacity-90">BS Biotechnology</p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="font-heading hover:text-[#EED1E6] transition-colors duration-200">
              About
            </a>
            <a href="#experiences" className="font-heading hover:text-[#EED1E6] transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="font-heading hover:text-[#EED1E6] transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="font-heading hover:text-[#EED1E6] transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Right Side - Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:fatima@example.com"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="font-body flex items-center justify-center gap-2 opacity-90">
            Made with <Heart className="w-4 h-4 fill-current" /> © {currentYear} Fatima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

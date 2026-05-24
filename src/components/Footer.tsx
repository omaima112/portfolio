import { Heart, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onNavigate: (page: 'About Me' | 'Experiences' | 'Projects' | 'Contact') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#5A2653] to-[#7E3F74] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="font-heading mb-2">{t('footer.name')}</h3>
            <p className="font-body opacity-90">{t('footer.degree')}</p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('About Me')}
              className="font-heading hover:text-[#EED1E6] transition-colors duration-200"
            >
              {t('footer.about')}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('Experiences')}
              className="font-heading hover:text-[#EED1E6] transition-colors duration-200"
            >
              {t('footer.experience')}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('Projects')}
              className="font-heading hover:text-[#EED1E6] transition-colors duration-200"
            >
              {t('footer.projects')}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('Contact')}
              className="font-heading hover:text-[#EED1E6] transition-colors duration-200"
            >
              {t('footer.contact')}
            </button>
          </div>

          {/* Right Side - Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/fatima-m-mushtaq-186999384"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:fatima.mushtaq40@gmail.com"
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

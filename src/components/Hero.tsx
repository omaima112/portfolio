import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigate: (page: 'Contact' | 'Projects') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useTranslation();
  return (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#F6E1F0] via-[#EED1E6] to-white min-h-screen flex items-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#5A2653] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(90,38,83,0.3)]">
              <ImageWithFallback
                src="/main image.png"
                alt="Fatima - BS Biotechnology Student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#5A2653] text-white px-4 py-2 rounded-full shadow-lg font-heading">
              {t('hero.degree')}
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Degree info moved to footer to avoid duplicate; kept visually minimal here */}
            
            <h1
              className="hero-name text-[#5A2653] mb-2 font-extrabold leading-tight"
              style={{ fontSize: 'min(6vh, 4rem)', lineHeight: 1 }}
            >
              Fatima M. Mushtaq
            </h1>





            <p className="font-body italic text-[#7E3F74] text-lg mb-6">
              {t('hero.quote')}
            </p>

            <p className="font-body text-gray-700 mb-8 max-w-2xl text-lg">
              {t('hero.bio')}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => onNavigate('Contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5A2653] hover:bg-[#7E3F74] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-heading"
              >
                <Mail className="w-5 h-5" />
                {t('hero.getInTouch')}
              </button>
              <button
                onClick={() => onNavigate('Projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-[#F6E1F0] text-[#5A2653] border-2 border-[#5A2653] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-heading"
              >
                {t('hero.viewProjects')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#A86A9A] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#7E3F74] rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}

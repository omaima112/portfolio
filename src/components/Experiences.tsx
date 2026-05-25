import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { InteractiveCard } from './InteractiveCard';
import { Briefcase } from 'lucide-react';
import { Slideshow } from './Slideshow';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import { ImageLightbox, LightboxImage } from './ImageLightbox';

const CLICK_TO_VIEW = (
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
    <div className="bg-black/60 text-white text-sm font-semibold px-4 py-2 rounded-full">
      Click to view
    </div>
  </div>
);

export function Experiences() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; title: string } | null>(null);

  const experienceImages: { images?: string[]; image?: string }[] = [
    {
      images: [
        '/website/Experience/narc3.jpeg',
        '/website/Experience/narc2.jpeg',
        '/website/Experience/narc4.jpeg',
        '/website/Experience/narc5.jpeg',
        '/website/Experience/narc1.jpeg',
      ],
    },
    { image: '/website/Experience/bj_cert.jpeg' },
    { images: ['/website/Experience/12.png', '/website/Experience/13.png'] },
  ];

  const experiences = (t('experiences.items', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    description: string;
    date: string;
  }>).map((exp, idx) => ({
    ...exp,
    icon: <Briefcase className="w-6 h-6" />,
    ...experienceImages[idx],
  }));

  return (
    <SectionWrapper
      id="experiences"
      title={t('experiences.title')}
      subtitle={t('experiences.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => {
          const hasImages = (exp.images && exp.images.length > 0) || exp.image;
          const lightboxImages: LightboxImage[] = exp.images
            ? exp.images.map(src => ({ src }))
            : exp.image ? [{ src: exp.image }] : [];

          return (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <InteractiveCard
                  title={exp.title}
                  subtitle={exp.subtitle}
                  description={exp.description}
                  date={exp.date}
                  icon={exp.icon}
                />
              </div>

              {hasImages && (
                <div
                  className="group relative rounded-lg overflow-hidden shadow-md w-full md:w-64 h-[240px] flex-shrink-0 cursor-pointer"
                  onClick={() => setLightbox({ images: lightboxImages, title: exp.title })}
                >
                  {exp.images && exp.images.length > 0 ? (
                    <Slideshow
                      images={exp.images.map(src => ({ src }))}
                      interval={2000}
                      className="w-full h-full"
                    />
                  ) : (
                    <ImageWithFallback
                      src={exp.image!}
                      alt={exp.title}
                      className="w-full h-full object-contain bg-white p-2"
                    />
                  )}
                  {CLICK_TO_VIEW}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </SectionWrapper>
  );
}

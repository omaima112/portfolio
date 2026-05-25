import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
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

          const isCertificate = !exp.images && !!exp.image;

          return (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#EED1E6]"
            >
              {hasImages && (
                <div
                  className="group relative h-52 overflow-hidden bg-[#F6E1F0] cursor-pointer"
                  onClick={() => setLightbox({ images: lightboxImages, title: exp.title })}
                >
                  {exp.images && exp.images.length > 0 ? (
                    <Slideshow
                      images={exp.images.map(src => ({ src }))}
                      interval={2500}
                      className="w-full h-full"
                    />
                  ) : (
                    <ImageWithFallback
                      src={exp.image!}
                      alt={exp.title}
                      className={`w-full h-full ${isCertificate ? 'object-contain p-4 bg-white' : 'object-cover'}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  {CLICK_TO_VIEW}
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-[#5A2653] flex-shrink-0 mt-1" />
                  <h3 className="font-heading text-[#5A2653] text-lg font-semibold leading-snug">
                    {exp.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-3 ml-8">
                  <MapPin className="w-4 h-4 text-[#7E3F74]" />
                  <p className="font-body text-[#7E3F74] text-sm">{exp.subtitle}</p>
                </div>

                <p className="font-body text-gray-600 text-sm mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex items-center gap-2 ml-8">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="font-body text-gray-500 text-xs italic">{exp.date}</span>
                </div>
              </div>
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

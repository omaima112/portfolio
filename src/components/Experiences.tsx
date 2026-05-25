import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Slideshow } from './Slideshow';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';
import { ImageLightbox, LightboxImage } from './ImageLightbox';

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
      <div className="max-w-3xl mx-auto space-y-5">
        {experiences.map((exp, index) => {
          const hasImages = (exp.images && exp.images.length > 0) || exp.image;
          const lightboxImages: LightboxImage[] = exp.images
            ? exp.images.map(src => ({ src }))
            : exp.image ? [{ src: exp.image }] : [];

          const isCertificate = !exp.images && !!exp.image;

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-[#EED1E6] p-5 flex gap-4 items-start hover:shadow-xl transition-shadow duration-300"
            >
              {/* Text — takes all remaining space, won't overflow */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-1.5">
                  <Briefcase className="w-4 h-4 text-[#5A2653] flex-shrink-0 mt-0.5" />
                  <h3 className="font-heading text-[#5A2653] text-base font-semibold leading-snug">
                    {exp.title}
                  </h3>
                </div>

                <div className="flex items-start gap-1.5 mb-2 ml-6">
                  <MapPin className="w-3.5 h-3.5 text-[#7E3F74] flex-shrink-0 mt-0.5" />
                  <p className="font-body text-[#7E3F74] text-sm leading-snug">{exp.subtitle}</p>
                </div>

                <p className="font-body text-gray-600 text-sm mb-3 ml-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex items-center gap-1.5 ml-6">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  <span className="font-body text-gray-400 text-xs italic">{exp.date}</span>
                </div>
              </div>

              {/* Thumbnail — strictly 120×120, never grows */}
              {hasImages && (
                <div
                  className="group relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border border-[#EED1E6]"
                  style={{ width: 120, height: 120 }}
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
                      className={`w-full h-full ${isCertificate ? 'object-contain p-1 bg-white' : 'object-cover'}`}
                    />
                  )}

                  {/* "Click to view" overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    <div className="bg-black/65 text-white text-xs font-semibold px-2 py-1 rounded-full text-center leading-tight">
                      Click to<br />view
                    </div>
                  </div>
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

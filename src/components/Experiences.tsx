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
        '/website/Experience/narc1.jpeg',
        '/website/Experience/narc2.jpeg',
        '/website/Experience/narc3.jpeg',
        '/website/Experience/narc4.jpeg',
        '/website/Experience/narc5.jpeg',
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
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => {
          const hasImages = (exp.images && exp.images.length > 0) || exp.image;
          const lightboxImages: LightboxImage[] = exp.images
            ? exp.images.map(src => ({ src }))
            : exp.image ? [{ src: exp.image }] : [];
          const isCertificate = !exp.images && !!exp.image;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-[#EED1E6] overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#5A2653] to-[#C87BAE]" />

              {/*
                Desktop: flex-row → text on left (flex-1), image fixed-width on right
                Mobile:  flex-col → text on top, image full-width strip below
              */}
              <div className="flex flex-col sm:flex-row">

                {/* ── Text ── */}
                <div className="flex-1 min-w-0 p-6 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <Briefcase className="w-5 h-5 text-[#5A2653] flex-shrink-0 mt-0.5" />
                    <h3 className="font-heading text-[#5A2653] text-lg font-semibold leading-snug">
                      {exp.title}
                    </h3>
                  </div>

                  <div className="flex items-start gap-2 ps-7">
                    <MapPin className="w-4 h-4 text-[#C87BAE] flex-shrink-0 mt-0.5" />
                    <p className="font-body text-[#7E3F74] text-sm leading-snug">{exp.subtitle}</p>
                  </div>

                  <div className="border-t border-[#F0D8EB]" />

                  <p className="font-body text-gray-600 text-sm leading-relaxed ps-7">{exp.description}</p>

                  <div className="flex items-center gap-2 ps-7">
                    <Calendar className="w-4 h-4 text-[#C87BAE]" />
                    <span className="font-body text-[#7E3F74] text-sm font-medium italic">{exp.date}</span>
                  </div>
                </div>

                {/* ── Image ──
                    Desktop: 200px wide, stretches full card height (flex default = stretch)
                    Mobile:  full width, 180px tall strip
                 */}
                {hasImages && (
                  <div
                    className="group relative cursor-pointer overflow-hidden border-t sm:border-t-0 sm:border-s border-[#EED1E6] hover:border-[#C87BAE] transition-colors duration-200"
                    style={{ flexShrink: 0, flexBasis: 200, minHeight: 180 }}
                    onClick={() => setLightbox({ images: lightboxImages, title: exp.title })}
                  >
                    {/* absolute fill so the slideshow/image always fills whatever size the container becomes */}
                    <div className="absolute inset-0">
                      {exp.images && exp.images.length > 0 ? (
                        <Slideshow images={exp.images.map(src => ({ src }))} interval={2500} className="w-full h-full" />
                      ) : (
                        <ImageWithFallback
                          src={exp.image!}
                          alt={exp.title}
                          className={`w-full h-full ${isCertificate ? 'object-contain p-2 bg-white' : 'object-cover'}`}
                        />
                      )}
                    </div>

                    {/* hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 bg-black/30">
                      <div className="bg-black/70 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                        Click to view
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {lightbox && (
        <ImageLightbox images={lightbox.images} title={lightbox.title} onClose={() => setLightbox(null)} />
      )}
    </SectionWrapper>
  );
}

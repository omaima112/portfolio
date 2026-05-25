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
              {/* coloured top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#5A2653] to-[#C87BAE]" />

              <div className="p-6 flex gap-5 items-start">
                {/* ── Text column ── */}
                <div className="flex-1 min-w-0 space-y-3">

                  {/* Title row */}
                  <div className="flex items-start gap-2.5">
                    <Briefcase className="w-5 h-5 text-[#5A2653] flex-shrink-0 mt-0.5" />
                    <h3 className="font-heading text-[#5A2653] text-lg font-semibold leading-snug">
                      {exp.title}
                    </h3>
                  </div>

                  {/* Institution */}
                  <div className="flex items-start gap-2 pl-7">
                    <MapPin className="w-4 h-4 text-[#C87BAE] flex-shrink-0 mt-0.5" />
                    <p className="font-body text-[#7E3F74] text-sm leading-snug">
                      {exp.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#F0D8EB] mx-0" />

                  {/* Description */}
                  <p className="font-body text-gray-600 text-sm leading-relaxed pl-7">
                    {exp.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 pl-7 pt-1">
                    <Calendar className="w-4 h-4 text-[#C87BAE]" />
                    <span className="font-body text-[#7E3F74] text-sm font-medium italic">
                      {exp.date}
                    </span>
                  </div>
                </div>

                {/* ── Thumbnail ── strictly 120×120, never grows */}
                {hasImages && (
                  <div
                    className="group relative flex-shrink-0 cursor-pointer rounded-xl overflow-hidden border-2 border-[#EED1E6] shadow-sm hover:border-[#C87BAE] transition-colors duration-200"
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

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 bg-black/30">
                      <div className="bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-full text-center leading-tight">
                        Click to<br />view
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
        <ImageLightbox
          images={lightbox.images}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </SectionWrapper>
  );
}

import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Heart, Award, Sparkles } from 'lucide-react';
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

export function Leadership() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; title: string } | null>(null);

  const iconMap = [<Award className="w-6 h-6" />, <Heart className="w-6 h-6" />, <Sparkles className="w-6 h-6" />];

  const leadership = (t('leadership.items', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    description: string | string[];
    date: string;
  }>).map((item, idx) => {
    const slideshows: { [key: number]: { images: Array<{ src: string; caption: string }> } } = {
      0: {
        images: [
          { src: '/website/extracurricualr/14.png', caption: 'Conference opening and welcome' },
          { src: '/website/extracurricualr/17.png', caption: 'Closing session highlights' },
        ],
      },
    };

    const images: { [key: number]: string } = {
      1: '/website/extracurricualr/15.png',
      2: '/website/extracurricualr/16.png',
    };

    return {
      ...item,
      icon: iconMap[idx],
      slideshow: slideshows[idx],
      image: images[idx],
    };
  });

  return (
    <SectionWrapper
      id="extracurricular-activities"
      title={t('leadership.title')}
      subtitle={t('leadership.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {leadership.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6] mx-auto max-w-[700px]"
          >
            {index === 0 && item.slideshow && (
              <div
                className="group relative h-64 overflow-hidden bg-[#F6E1F0] cursor-pointer"
                onClick={() => setLightbox({ images: item.slideshow!.images, title: item.title })}
              >
                <Slideshow images={item.slideshow.images} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                {CLICK_TO_VIEW}
              </div>
            )}

            {index > 0 && item.image && (
              <div
                className="group relative h-64 overflow-hidden bg-[#F6E1F0] cursor-pointer"
                onClick={() => setLightbox({ images: [{ src: item.image! }], title: item.title })}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                {CLICK_TO_VIEW}
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <h3 className="font-heading text-[#5A2653] text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="font-body text-[#7E3F74] text-sm mb-2">{item.subtitle}</p>
              {Array.isArray(item.description) ? (
                <ul className="list-disc pl-5 text-gray-600 text-sm mb-3">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-gray-600 text-sm mb-3">{item.description}</p>
              )}
              <p className="font-body text-gray-500 text-xs italic">{item.date}</p>
            </div>
          </div>
        ))}
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

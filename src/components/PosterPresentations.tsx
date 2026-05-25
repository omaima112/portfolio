import { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Slideshow } from './Slideshow';
import { useTranslation } from 'react-i18next';
import { ImageLightbox, LightboxImage } from './ImageLightbox';

const CLICK_TO_VIEW = (
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
    <div className="bg-black/60 text-white text-sm font-semibold px-4 py-2 rounded-full">
      Click to view
    </div>
  </div>
);

const GOLDEN_BADGE_STYLE: React.CSSProperties = {
  background: 'linear-gradient(135deg, #F5D060, #C8960C)',
  color: '#4a2c00',
};

export function PosterPresentations() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; title: string } | null>(null);

  const posters = (t('posters.items', { returnObjects: true }) as Array<{
    title: string;
    conference: string;
    description: string;
    award?: string;
  }>).map((poster, idx) => {
    const slideshows: { [key: number]: { images: Array<{ src: string; caption: string }> } } = {
      0: {
        images: [
          { src: '/website/poster presentation/9.png', caption: 'Poster design and presentation' },
          { src: '/website/poster presentation/10.png', caption: 'Team coordination and Q&A' },
        ],
      },
    };

    const images: { [key: number]: string } = {
      1: '/website/poster presentation/11.png',
    };

    return {
      ...poster,
      slideshow: slideshows[idx],
      image: images[idx],
    };
  });

  return (
    <SectionWrapper
      id="posters"
      title={t('posters.title')}
      subtitle={t('posters.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posters.map((poster, index) => {
            const lightboxImages: LightboxImage[] = poster.slideshow?.images
              ? poster.slideshow.images
              : poster.image ? [{ src: poster.image }] : [];

            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#EED1E6]"
              >
                <div
                  className="group relative h-64 overflow-hidden bg-[#F6E1F0] cursor-pointer"
                  onClick={() => setLightbox({ images: lightboxImages, title: poster.title })}
                >
                  {poster.slideshow?.images ? (
                    <Slideshow images={poster.slideshow.images} className="w-full h-full" />
                  ) : (
                    <ImageWithFallback
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

                  {poster.award && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-2 shadow-lg font-heading text-sm font-bold pointer-events-none z-10"
                      style={GOLDEN_BADGE_STYLE}
                    >
                      {poster.award}
                    </div>
                  )}

                  {CLICK_TO_VIEW}
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="w-5 h-5 text-[#5A2653] flex-shrink-0 mt-1" />
                    <h3 className="font-heading text-[#5A2653] text-xl md:text-2xl font-semibold">{poster.title}</h3>
                  </div>

                  <p className="font-body text-[#7E3F74] mb-3">{poster.conference}</p>
                  <p className="font-body text-gray-600">{poster.description}</p>
                </div>
              </div>
            );
          })}
        </div>
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
